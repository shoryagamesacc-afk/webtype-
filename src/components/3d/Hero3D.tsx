"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Preload, ContactShadows, Stars } from "@react-three/drei";
import * as THREE from "three";

function FuturisticObject() {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        {/* Core glowing sphere */}
        <mesh
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshPhysicalMaterial
            color={hovered ? "#a855f7" : "#050505"}
            emissive={hovered ? "#8b5cf6" : "#2a1542"}
            emissiveIntensity={hovered ? 2 : 0.5}
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.8}
            wireframe={true}
          />
        </mesh>
        
        {/* Outer glass ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.5, 0.05, 16, 100]} />
          <meshPhysicalMaterial
            color="#ffffff"
            emissive="#8b5cf6"
            emissiveIntensity={1}
            roughness={0.2}
            metalness={1}
          />
        </mesh>
        
        {/* Outer glass ring 2 */}
        <mesh rotation={[0, Math.PI / 4, 0]}>
          <torusGeometry args={[3, 0.02, 16, 100]} />
          <meshPhysicalMaterial
            color="#ffffff"
            emissive="#8b5cf6"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={1}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#8b5cf6" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4c1d95" />
        
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <FuturisticObject />
        
        <ContactShadows
          position={[0, -4, 0]}
          opacity={0.5}
          scale={20}
          blur={2}
          far={10}
          color="#8b5cf6"
        />
        
        <Environment preset="city" />
        <Preload all />
      </Canvas>
      {/* Overlay gradient to blend with background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#050505]" />
    </div>
  );
}
