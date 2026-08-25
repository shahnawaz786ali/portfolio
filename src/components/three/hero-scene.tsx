"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { ParticleField } from "./particle-field";
import { HeroMonitor } from "./hero-monitor";

function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.25, 0.04);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.15, 0.04);
  });

  return <group ref={group}>{children}</group>;
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7.5], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.55} />
      <pointLight position={[4, 3, 4]} intensity={22} color="#8b5cf6" />
      <pointLight position={[-4, -2, 2]} intensity={14} color="#4f7dfb" />

      <Suspense fallback={null}>
        <ParallaxRig>
          <HeroMonitor />
        </ParallaxRig>
        <ParticleField />
      </Suspense>
    </Canvas>
  );
}
