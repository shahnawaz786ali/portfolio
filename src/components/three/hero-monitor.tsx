"use client";

import { Float, Html, RoundedBox, Torus } from "@react-three/drei";

const codeLines = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: `name: "Shahnawaz Ali",` },
  { indent: 1, text: `role: "Full-Stack Developer",` },
  { indent: 1, text: "skills: [" },
  { indent: 2, text: `"Python", "Django",` },
  { indent: 2, text: `"React", "Next.js",` },
  { indent: 2, text: `"PostgreSQL", "Redis",` },
  { indent: 2, text: `"Celery"` },
  { indent: 1, text: "]" },
  { indent: 0, text: "};" },
];

function CodeScreen() {
  return (
    <div
      style={{
        width: 300,
        height: 190,
        borderRadius: 12,
        padding: "16px 18px",
        background: "linear-gradient(160deg, #0d0e1a 0%, #14152a 100%)",
        border: "1px solid rgba(167,139,250,0.25)",
        boxShadow: "0 0 40px -8px rgba(139,92,246,0.45)",
        fontFamily: "var(--font-geist-mono), monospace",
        fontSize: 11.5,
        lineHeight: 1.75,
        color: "#d4d4e0",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
        <span style={{ width: 8, height: 8, borderRadius: 999, background: "#f87171" }} />
        <span style={{ width: 8, height: 8, borderRadius: 999, background: "#fbbf24" }} />
        <span style={{ width: 8, height: 8, borderRadius: 999, background: "#34d399" }} />
      </div>
      {codeLines.map((line, i) => (
        <div
          key={i}
          style={{
            paddingLeft: line.indent * 14,
            whiteSpace: "nowrap",
            opacity: 0.92,
          }}
        >
          <span style={{ color: "#7c8dfc" }}>
            {line.text.split(/(".*?")/).map((part, j) =>
              part.startsWith('"') ? (
                <span key={j} style={{ color: "#5eead4" }}>
                  {part}
                </span>
              ) : (
                <span key={j} style={{ color: "#d4d4e0" }}>
                  {part}
                </span>
              )
            )}
          </span>
        </div>
      ))}
      <span
        style={{
          display: "inline-block",
          width: 6,
          height: 13,
          background: "#a78bfa",
          marginTop: 2,
          animation: "blink 1.1s step-end infinite",
        }}
      />
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </div>
  );
}

export function HeroMonitor() {
  return (
    <group position={[0.4, 0.2, 0]}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.7}>
        <group rotation={[0.05, -0.35, 0]}>
          <RoundedBox args={[3.3, 2.1, 0.12]} radius={0.09} smoothness={4} position={[0, 0, -0.08]}>
            <meshStandardMaterial color="#15121f" metalness={0.4} roughness={0.35} />
          </RoundedBox>
          <Html
            transform
            distanceFactor={2.6}
            position={[0, 0.05, 0.02]}
            style={{ pointerEvents: "none" }}
            occlude={false}
          >
            <CodeScreen />
          </Html>
          <RoundedBox args={[0.3, 0.5, 0.1]} radius={0.03} position={[0, -1.35, -0.1]}>
            <meshStandardMaterial color="#1b1830" metalness={0.5} roughness={0.4} />
          </RoundedBox>
          <RoundedBox args={[1.4, 0.08, 0.7]} radius={0.03} position={[0, -1.62, -0.15]}>
            <meshStandardMaterial color="#1b1830" metalness={0.5} roughness={0.4} />
          </RoundedBox>
        </group>
      </Float>

      <Torus args={[3.1, 0.006, 8, 90]} rotation={[1.4, 0.3, 0]}>
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.35} />
      </Torus>
      <Torus args={[3.7, 0.005, 8, 90]} rotation={[1.2, -0.4, 0.3]}>
        <meshBasicMaterial color="#4f7dfb" transparent opacity={0.25} />
      </Torus>
    </group>
  );
}
