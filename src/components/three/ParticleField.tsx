"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 200 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 20,
      y: (Math.random() - 0.5) * 20,
      z: (Math.random() - 0.5) * 10,
      speed: Math.random() * 0.005 + 0.001,
      rotSpeed: Math.random() * 0.02,
      size: Math.random() * 0.04 + 0.01,
      type: Math.random() > 0.7 ? "sakura" : "dot",
    }));
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    particles.forEach((p, i) => {
      p.y -= p.speed;
      p.x += Math.sin(t * 0.3 + i) * 0.002;
      if (p.y < -10) p.y = 10;

      dummy.position.set(p.x, p.y, p.z);
      dummy.rotation.z = t * p.rotSpeed;
      dummy.scale.setScalar(p.size);
      dummy.updateMatrix();
      mesh.current?.setMatrixAt(i, dummy.matrix);
    });
    if (mesh.current) mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color="#ffb3c6" transparent opacity={0.4} side={THREE.DoubleSide} depthWrite={false} />
    </instancedMesh>
  );
}

function GreenDots({ count = 80 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const dots = useMemo(() =>
    Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 25,
      y: (Math.random() - 0.5) * 25,
      z: (Math.random() - 0.5) * 8,
      speed: Math.random() * 0.003 + 0.001,
      pulse: Math.random() * Math.PI * 2,
    })), [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    dots.forEach((d, i) => {
      d.y -= d.speed;
      if (d.y < -12) d.y = 12;
      const scale = 0.03 + Math.sin(t * 2 + d.pulse) * 0.01;
      dummy.position.set(d.x, d.y, d.z);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      mesh.current?.setMatrixAt(i, dummy.matrix);
    });
    if (mesh.current) mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color="#00ff88" transparent opacity={0.6} depthWrite={false} />
    </instancedMesh>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ antialias: false, alpha: true }} dpr={1}>
        <Particles count={150} />
        <GreenDots count={60} />
      </Canvas>
    </div>
  );
}
