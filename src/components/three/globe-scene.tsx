"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function GlobePoints() {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  const positions = useMemo(() => {
    const count = 900;
    const arr = new Float32Array(count * 3);
    const radius = 2.4;
    for (let i = 0; i < count; i++) {
      const theta = Math.acos(1 - 2 * (i + 0.5) / count);
      const phi = Math.PI * (1 + Math.sqrt(5)) * i;
      arr[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
      arr[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      arr[i * 3 + 2] = radius * Math.cos(theta);
    }
    return arr;
  }, []);

  const orbitPositions = useMemo(() => {
    const count = 60;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 3.1 + Math.sin(i * 3) * 0.08;
      arr[i * 3] = Math.cos(angle) * radius;
      arr[i * 3 + 1] = Math.sin(angle * 1.6) * 0.4;
      arr[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.y * 0.2,
      0.03
    );
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.032} color="#a78bfa" transparent opacity={0.85} sizeAttenuation />
      </points>
      <mesh>
        <sphereGeometry args={[2.4, 24, 24]} />
        <meshBasicMaterial color="#4f7dfb" wireframe transparent opacity={0.08} />
      </mesh>
      <points rotation={[0.3, 0, 0.15]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[orbitPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.045} color="#5eead4" transparent opacity={0.7} sizeAttenuation />
      </points>
    </group>
  );
}

export default function GlobeScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 2, 4]} intensity={12} color="#8b5cf6" />
      <Suspense fallback={null}>
        <GlobePoints />
      </Suspense>
    </Canvas>
  );
}
