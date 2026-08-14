"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Line } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create random points for nodes
  const nodes = useMemo(() => {
    const points = [];
    for (let i = 0; i < 60; i++) {
      const phi = Math.acos(-1 + (2 * i) / 60);
      const theta = Math.sqrt(60 * Math.PI) * phi;
      const r = 2; // radius
      points.push(
        new THREE.Vector3(
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi)
        )
      );
    }
    return points;
  }, []);

  // Create connections between close nodes
  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].distanceTo(nodes[j]);
        if (distance < 1.5) {
          lines.push([nodes[i], nodes[j]]);
        }
      }
    }
    return lines;
  }, [nodes]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base invisible sphere for outline */}
      <mesh>
        <sphereGeometry args={[1.9, 32, 32]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.8} />
      </mesh>

      {/* Nodes */}
      {nodes.map((pos, i) => (
        <mesh key={`node-${i}`} position={pos}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color="#a855f7" />
        </mesh>
      ))}

      {/* Connections */}
      {connections.map((line, i) => (
        <Line
          key={`line-${i}`}
          points={line as any}
          color="#8b5cf6"
          lineWidth={0.5}
          transparent
          opacity={0.3}
        />
      ))}
    </group>
  );
}

export default function ContactGlobe() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <Stars radius={10} depth={50} count={1000} factor={2} saturation={0} fade speed={1} />
        <Globe />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
