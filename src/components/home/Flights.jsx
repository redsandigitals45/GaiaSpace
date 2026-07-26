"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import indexBy from "index-array-by";
import { csvParseRows } from "d3-dsv";
import dynamic from "next/dynamic";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });
const COUNTRY = "United States";

/* ------------------ Parsers ------------------ */

const airportParse = ([
  airportId,
  name,
  city,
  country,
  iata,
  icao,
  lat,
  lng,
  alt,
  timezone,
  dst,
  tz,
  type,
  source,
]) => ({
  airportId,
  name,
  city,
  country,
  iata,
  icao,
  lat,
  lng,
  alt,
  timezone,
  dst,
  tz,
  type,
  source,
});

const routeParse = ([
  airline,
  airlineId,
  srcIata,
  srcAirportId,
  dstIata,
  dstAirportId,
  codeshare,
  stops,
  equipment,
]) => ({
  airline,
  airlineId,
  srcIata,
  srcAirportId,
  dstIata,
  dstAirportId,
  codeshare,
  stops,
  equipment,
});

export default function Flights({ onTimelineUpdate }) {
  const timelineData = [
    {
      year: "1938",
      label: "Global annual airline passengers: ~1 million",
      passengers: "~1 million",
      flights: "~2K",
      routeLimit: 10,
    },
    {
      year: "1950",
      label: "Annual passengers worldwide: ~30 million",
      passengers: "~30 million",
      flights: "~100K",
      routeLimit: 20,
    },
    {
      year: "1970",
      label: "Annual passengers: ~310 million",
      passengers: "~310 million",
      flights: "~1M",
      routeLimit: 100,
    },
    {
      year: "1980",
      label: "Annual passengers: ~600 million",
      passengers: "~600 million",
      flights: "~2M",
      routeLimit: 180,
    },
    {
      year: "1990",
      label: "Annual passengers: ~1 billion",
      passengers: "~1 billion",
      flights: "~3M",
      routeLimit: 240,
    },
    {
      year: "2000",
      label: "Annual passengers: ~1.7 billion",
      passengers: "~1.7 billion",
      flights: "~5M",
      routeLimit: 300,
    },
    {
      year: "2010",
      label: "Annual passengers: ~2.6 billion",
      passengers: "~2.6 billion",
      flights: "~8M",
      routeLimit: 400,
    },
    {
      year: "2019",
      label: "Pre-pandemic peak: ~4.5 billion",
      passengers: "~4.5 billion",
      flights: "~12M",
      routeLimit: 500,
    },
    {
      year: "2020",
      label: "Sharp COVID-19 decline: ~1.8 billion",
      passengers: "~1.8 billion",
      flights: "~6M",
      routeLimit: 300,
    },
    {
      year: "2023",
      label: "Recovery to ~4.5 billion passengers",
      passengers: "~4.5 billion",
      flights: "~12M",
      routeLimit: 500,
    },
    {
      year: "2024",
      label: "Record high: ~9.5 billion passengers",
      passengers: "~9.5 billion",
      flights: "~25M",
      routeLimit: 600,
    },
  ];
  const timelineDataMobile = [
    {
      year: "1938",
      label: "Global annual airline passengers: ~1 million",
      passengers: "~1 million",
      flights: "~2K",
      routeLimit: 2,
    },
    {
      year: "1970",
      label: "Annual passengers: ~310 million",
      passengers: "~310 million",
      flights: "~1M",
      routeLimit: 50,
    },
    {
      year: "1990",
      label: "Annual passengers: ~1 billion",
      passengers: "~1 billion",
      flights: "~3M",
      routeLimit: 150,
    },
    {
      year: "2010",
      label: "Annual passengers: ~2.6 billion",
      passengers: "~2.6 billion",
      flights: "~8M",
      routeLimit: 310,
    },
    {
      year: "2020",
      label: "Sharp COVID-19 decline: ~1.8 billion",
      passengers: "~1.8 billion",
      flights: "~6M",
      routeLimit: 200,
    },
    {
      year: "Present",
      label: "Record high: ~9.5 billion passengers",
      passengers: "~9.5 billion",
      flights: "~25M",
      routeLimit: 500,
    },
  ];

  const globeEl = useRef(null);
  const containerRef = useRef(null);

  const cameraRef = useRef(null);
  const sceneRef = useRef(null);

  const [airports, setAirports] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [isGlobeReady, setIsGlobeReady] = useState(false);
  const [routeLimit, setRouteLimit] = useState(0);
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const routeLimitRef = useRef(0);
  const sputnikRef = useRef(null);
  const activeTimeline = isSmallDevice ? timelineDataMobile : timelineData;

  useEffect(() => {
    Promise.all([
      fetch(
        "https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat",
      )
        .then((res) => res.text())
        .then((d) => csvParseRows(d, airportParse)),
      fetch(
        "https://raw.githubusercontent.com/jpatokal/openflights/master/data/routes.dat",
      )
        .then((res) => res.text())
        .then((d) => csvParseRows(d, routeParse)),
    ]).then(([airports, routes]) => {
      const byIata = indexBy(airports, "iata", false);

      const filteredRoutes = routes
        .filter(
          (d) => byIata[d.srcIata] && byIata[d.dstIata] && d.stops === "0",
        )
        .map((d) => ({
          ...d,
          srcAirport: byIata[d.srcIata],
          dstAirport: byIata[d.dstIata],
        }))
        .filter(
          (d) =>
            d.srcAirport.country === COUNTRY &&
            d.dstAirport.country !== COUNTRY,
        );

      setAirports(airports);
      setRoutes(filteredRoutes);
    });
  }, []);

  useEffect(() => {
    const BREAKPOINT = 786;

    if (window.innerWidth < BREAKPOINT) {
      setIsSmallDevice(true);
    }
  }, []);

  const filteredRoutes = useMemo(
    () => routes.slice(0, routeLimit),
    [routes, routeLimit],
  );

  const handleGlobeReady = () => {
    if (!globeEl.current) return;

    const camera = globeEl.current.camera();
    const scene = globeEl.current.scene();
    const controls = globeEl.current.controls();

    camera.fov = 30;
    camera.near = 0.1;
    camera.far = 10000;

    isSmallDevice
      ? camera.position.set(0, 110, 350)
      : camera.position.set(0, 110, 150);
    const lookAtPoint = camera.position.clone();
    //isSmallDevice ? (lookAtPoint.z -= 0) : (lookAtPoint.z -= 100);
    lookAtPoint.z -= 0;
    camera.lookAt(lookAtPoint);
    camera.updateProjectionMatrix();

    if (controls) controls.enabled = false;

    cameraRef.current = camera;
    sceneRef.current = scene;

    const loader = new GLTFLoader();
    loader.load("/sputnik.glb", (gltf) => {
      const sputnik = gltf.scene;
      sputnik.scale.set(0.3, 0.3, 0.3);
      sputnik.position.set(-100, 50, 100);

      // sputnik.rotation.x = Math.PI / 180;
      // sputnik.rotation.y = Math.PI / 10;

      sputnik.rotation.x = Math.PI / 3.5;
      sputnik.rotation.y = 0;
      sputnik.rotation.z = Math.PI / 5;

      sputnik.visible = true;
      scene.add(sputnik);
      sputnikRef.current = sputnik;
    });

    setIsGlobeReady(true);
    const animate = (time) => {
      requestAnimationFrame(animate);
      // if (sputnikRef.current) {
      //   sputnikRef.current.rotation.z += 0.005;
      // }
    };
    animate();
  };

  useGSAP(
    () => {
      if (!isGlobeReady) return;

      const camera = cameraRef.current;
      const scene = sceneRef.current;

      /* ================= HERO ================= */
      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero_pin",
          start: "top top",
          end: "+=80%",
          scrub: 3,
          pin: true,
          anticipatePin: 1,
        },
      });

      heroTimeline
        .to(".content", {
          filter: "blur(40px)",
          autoAlpha: 0,
          scale: 0.5,
          ease: "power1.inOut",
        })
        .to(
          camera.position,
          {
            x: 0,
            y: -30,
            z: isSmallDevice ? 1000 : 700,
            ease: "power1.inOut",
          },
          "<",
        );
      /* ================= PHASE 2: TIMELINE SCROLL ================= */
      const timelineProxy = { index: 0 };

      const phase2Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".after_hero",
          start: "top bottom",
          end: "bottom top",
          scrub: 3,
        },
      });

      // Fade the UI in at the start, out at the end
      phase2Timeline
        .fromTo(".phase-2", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.15 })
        .to(".phase-2", { autoAlpha: 0, duration: 0.15 }, 0.85);

      gsap.to(timelineProxy, {
        index: activeTimeline.length - 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".after_hero",
          start: "top bottom",
          end: "bottom top",
          scrub: 3,
        },
        onUpdate: () => {
          const idx = Math.round(timelineProxy.index);
          onTimelineUpdate?.(idx);

          const nextLimit = activeTimeline[idx].routeLimit;
          if (nextLimit !== routeLimitRef.current) {
            routeLimitRef.current = nextLimit;
            setRouteLimit(nextLimit);
          }
        },
      });

      /* ================= SATELLITE ================= */
      const satelliteTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".last",
          start: "top top",
          end: "bottom 20%",
          scrub: 3,
        },
      });

      satelliteTimeline
        .fromTo(".satellite", { opacity: 0 }, { opacity: 1 })
        .to(
          camera.position,
          {
            x: isSmallDevice ? 0 : -100,
            y: isSmallDevice ? 100 : 90,
            z: isSmallDevice ? 400 : 200,
            ease: "power1.inOut",
          },
          "<",
        )
        .to(".satellite", { opacity: 0 });

      /* ================= SCENE ROTATION ================= */
      const rotateScene = (time) => {
        scene.rotation.y = time * 0.2;

        if (sputnikRef.current) {
          sputnikRef.current.position.y = 50 + Math.sin(time * 1.2) * 8;
        }
      };

      gsap.ticker.add(rotateScene);
      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove(rotateScene);
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { dependencies: [isGlobeReady] },
  );

  return (
    <div ref={containerRef}>
      <Globe
        ref={globeEl}
        animateIn={false}
        globeImageUrl="/textures/earth/earth-night.webp"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere
        rendererConfig={{ antialias: true, alpha: true }}
        hexPolygonUseDots
        hexPolygonResolution={2}
        onGlobeReady={handleGlobeReady}
        arcsData={filteredRoutes}
        arcStartLat={(d) => +d.srcAirport.lat}
        arcStartLng={(d) => +d.srcAirport.lng}
        arcEndLat={(d) => +d.dstAirport.lat}
        arcEndLng={(d) => +d.dstAirport.lng}
        arcAltitude={0.15}
        arcDashLength={1}
        arcDashGap={1}
        arcDashInitialGap={() => Math.random()}
        arcDashAnimateTime={3000}
        arcsTransitionDuration={0.5}
        arcStroke={null}
        arcColor={() => "#068bbe"}
      />
    </div>
  );
}
