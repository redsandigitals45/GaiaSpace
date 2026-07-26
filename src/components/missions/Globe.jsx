"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import indexBy from "index-array-by";
import { csvParseRows } from "d3-dsv";
import dynamic from "next/dynamic";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const COUNTRY = "Russia";

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

export default function Basic() {
  const globeEl = useRef(null);
  const containerRef = useRef(null);

  const cameraRef = useRef(null);
  const sceneRef = useRef(null);

  const [airports, setAirports] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [isGlobeReady, setIsGlobeReady] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

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
    lookAtPoint.z -= 100;
    camera.lookAt(lookAtPoint);
    camera.updateProjectionMatrix();

    if (controls) controls.enabled = false;

    cameraRef.current = camera;
    sceneRef.current = scene;

    setIsGlobeReady(true);
  };

  useGSAP(
    () => {
      if (!isGlobeReady) return;

      const scene = sceneRef.current;

      /* ================= SCENE ROTATION ================= */
      const rotateScene = (time) => {
        scene.rotation.y = time * 0.2;
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
        showAtmosphere={true}
        rendererConfig={{ antialias: true, alpha: true }}
        hexPolygonUseDots
        hexPolygonResolution={2}
        onGlobeReady={handleGlobeReady}
        arcsData={routes}
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
        arcColor={() => "#00a8e8"}
        //arcColor={() => "#e09f3e"}
        pointsData={airports}
        pointColor={() => "orange"}
        pointAltitude={0}
        pointRadius={0.02}
        pointsMerge={true}
      />
    </div>
  );
}
