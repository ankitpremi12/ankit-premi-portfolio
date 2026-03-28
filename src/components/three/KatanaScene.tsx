"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function KatanaBlade() {
  const bladeRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (bladeRef.current) {
      bladeRef.current.rotation.z = Math.sin(t * 0.3) * 0.08;
      bladeRef.current.rotation.x = Math.sin(t * 0.2) * 0.05;
    }
    if (glowRef.current) {
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.15 + Math.sin(t * 2) * 0.08;
    }
  });

  const bladeGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -2.4);
    shape.lineTo(0.06, -2.0);
    shape.lineTo(0.09, 0);
    shape.lineTo(0.04, 2.2);
    shape.lineTo(0, 2.4);
    shape.lineTo(-0.04, 2.2);
    shape.lineTo(-0.09, 0);
    shape.lineTo(-0.06, -2.0);
    shape.closePath();
    const extrudeSettings = { depth: 0.015, bevelEnabled: true, bevelThickness: 0.005, bevelSize: 0.005 };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  const guardGeometry = useMemo(() => new THREE.CylinderGeometry(0.18, 0.18, 0.06, 8), []);
  const handleGeometry = useMemo(() => new THREE.CylinderGeometry(0.055, 0.055, 0.7, 8), []);

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group rotation={[0, 0, Math.PI * 0.15]} position={[0.2, 0, 0]}>
        {/* Blade */}
        <mesh ref={bladeRef} geometry={bladeGeometry} position={[0, 0.35, 0]}>
          <meshStandardMaterial
            color="#c0c0c0"
            metalness={0.95}
            roughness={0.05}
            envMapIntensity={2}
          />
        </mesh>

        {/* Blade glow overlay */}
        <mesh ref={glowRef} geometry={bladeGeometry} position={[0, 0.35, 0]}>
          <meshBasicMaterial color="#00ff88" transparent opacity={0.15} side={THREE.DoubleSide} />
        </mesh>

        {/* Guard (tsuba) */}
        <mesh geometry={guardGeometry} position={[0, -2.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#b8860b" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Handle */}
        <mesh geometry={handleGeometry} position={[0, -2.42, 0]}>
          <meshStandardMaterial color="#1a0a00" metalness={0.1} roughness={0.9} />
        </mesh>

        {/* Haki energy lines */}
        {[-0.05, 0, 0.05].map((x, i) => (
          <mesh key={i} position={[x, 0.3, 0.02]}>
            <boxGeometry args={[0.002, 4.2, 0.001]} />
            <meshBasicMaterial color="#00ff88" transparent opacity={0.3 - i * 0.08} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function HakiParticles() {
  return (
    <Sparkles
      count={120}
      scale={[4, 8, 4]}
      size={1.5}
      speed={0.4}
      opacity={0.5}
      color="#00ff88"
      noise={1}
    />
  );
}

function RedAuraParticles() {
  return (
    <Sparkles
      count={40}
      scale={[6, 10, 6]}
      size={2}
      speed={0.2}
      opacity={0.2}
      color="#e63946"
      noise={2}
    />
  );
}

function OceanFog() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    }
  });
  return (
    <mesh ref={meshRef} scale={[8, 8, 8]}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial
        color="#001122"
        transparent
        opacity={0.3}
        distort={0.4}
        speed={0.5}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[2, 3, 2]} intensity={2} color="#00ff88" />
      <pointLight position={[-2, -2, 1]} intensity={1} color="#e63946" />
      <pointLight position={[0, 0, 3]} intensity={0.5} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffd700" />
    </>
  );
}

export default function KatanaScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Lights />
        <KatanaBlade />
        <HakiParticles />
        <RedAuraParticles />
        <OceanFog />
      </Canvas>
    </div>
  );
}
