import React, { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

// Define opposing axis pairs
const axesPairs: [string, string][] = [
  ["Civilization", "Wilderness"],
  ["Good", "Evil"],
  ["Order", "Chaos"],
  ["Law", "Freedom"],
  ["Tradition", "Innovation"],
];

// Example values (0-100)
const axesValues: Record<string, number> = {
  Civilization: 70,
  Wilderness: 60, // conflict
  Good: 80,
  Evil: 0,
  Order: 60,
  Chaos: 30,
  Law: 50,
  Freedom: 40,
  Tradition: 60,
  Innovation: 70, // conflict
};

// Colors for axes
const axesColors: Record<string, string> = {
  Civilization: "dodgerblue",
  Wilderness: "forestgreen",
  Good: "green",
  Evil: "red",
  Order: "orange",
  Chaos: "purple",
  Law: "skyblue",
  Freedom: "gold",
  Tradition: "brown",
  Innovation: "pink",
};

const maxRadius = 2;

type AxisProps = {
  name: string;
  value: number;
  color: string;
  theta: number;
  phi: number;
};

const Axis: FC<AxisProps> = ({ name, value, color, theta, phi }) => {
  // Convert spherical to Cartesian
  const x = Math.sin(phi) * Math.cos(theta);
  const y = Math.cos(phi);
  const z = Math.sin(phi) * Math.sin(theta);

  const end: [number, number, number] = [
    x * (value / 100) * maxRadius,
    y * (value / 100) * maxRadius,
    z * (value / 100) * maxRadius,
  ];

  const endArray = new Float32Array([0, 0, 0, end[0], end[1], end[2]]);

  return (
    <group>
      {/* Spike line */}
      <line>
        <bufferGeometry>
          {/* @ts-ignore */}
          <bufferAttribute  attach="attributes-position"  array={endArray}  itemSize={3}/>
        </bufferGeometry>
        <lineBasicMaterial {...({ color, linewidth: 2 } as any)} />
      </line>

      {/* Sphere at tip */}
      <mesh position={end}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial {...({ color } as any)} />
      </mesh>

      {/* Label */}
      <Text
        {...({
          children: name,
          position: [end[0] * 1.1, end[1] * 1.1, end[2] * 1.1],
          fontSize: 0.15,
          color,
          anchorX: "center",
          anchorY: "middle",
        } as any)}
      />
    </group>
  );
};

export const SphereRadar: FC = () => {
  // Precompute all axes positions
  const allAxes = axesPairs.flatMap((pair, pairIndex) =>
    pair.map((name, axisIndex) => {
      const theta = (pairIndex / axesPairs.length) * Math.PI * 2;
      const phi = axisIndex === 0 ? Math.PI / 4 : (3 * Math.PI) / 4;
      return { name, theta, phi };
    })
  );

  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls enablePan enableZoom />

      {/* Center sphere */}
      <mesh>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial {...({ color: "black" } as any)} />
      </mesh>

      {/* Render axes spikes */}
      {allAxes.map((axis) => (
        <Axis
          key={axis.name}
          name={axis.name}
          value={axesValues[axis.name]}
          color={axesColors[axis.name]}
          theta={axis.theta}
          phi={axis.phi}
        />
      ))}

      {/* Contradiction lines */}
      {axesPairs.map(([a, b], idx) => {
        const valA = axesValues[a];
        const valB = axesValues[b];

        if (valA > 0 && valB > 0) {
          const theta = (idx / axesPairs.length) * Math.PI * 2;

          const endA: [number, number, number] = [
            Math.sin(Math.PI / 4) * Math.cos(theta) * (valA / 100) * maxRadius,
            Math.cos(Math.PI / 4) * (valA / 100) * maxRadius,
            Math.sin(Math.PI / 4) * Math.sin(theta) * (valA / 100) * maxRadius,
          ];

          const endB: [number, number, number] = [
            Math.sin((3 * Math.PI) / 4) * Math.cos(theta) * (valB / 100) * maxRadius,
            Math.cos((3 * Math.PI) / 4) * (valB / 100) * maxRadius,
            Math.sin((3 * Math.PI) / 4) * Math.sin(theta) * (valB / 100) * maxRadius,
          ];

          const endArrayAB = new Float32Array([
            endA[0], endA[1], endA[2],
            endB[0], endB[1], endB[2],
          ]);

          return (
            <line key={a + b}>
              <bufferGeometry>
                {/* @ts-ignore */}
                <bufferAttribute  attach="attributes-position"  array={endArrayAB}  itemSize={3}/>
              </bufferGeometry>
              <lineBasicMaterial {...({ color: "hotpink", linewidth: 2 } as any)} />
            </line>
          );
        }

        return null;
      })}
    </Canvas>
  );
};
