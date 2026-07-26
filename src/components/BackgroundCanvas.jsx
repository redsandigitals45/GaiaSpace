"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Thing() {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={ref}
      onClick={() => console.log("click")}
      onPointerOver={() => console.log("hover")}
      onPointerOut={() => console.log("unhover")}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial />
    </mesh>
  );
}

export default function BackgroundCanvas() {
  return (
    <div className="canvas-bg">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <Thing />
      </Canvas>
    </div>
  );
}
