"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Dna, Droplet, Syringe, LineChart, Stethoscope } from "lucide-react";

// Central Glowing Orb
function CentralOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Subtle pulsing scale
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial 
          color="#ffffff"
          emissive="#0ea5e9"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.1}
          transparent
          opacity={0.9}
        />
      </mesh>
      {/* Outer Glow Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshBasicMaterial color="#14b8a6" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.2, 0.01, 16, 100]} />
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.2} />
      </mesh>
    </Float>
  );
}

// Particle System
function Particles({ count = 100 }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const lightColor = new THREE.Color("#0ea5e9");
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -5 + Math.random() * 10;
      const yFactor = -5 + Math.random() * 10;
      const zFactor = -5 + Math.random() * 10;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      
      if (meshRef.current) {
        meshRef.current.setMatrixAt(i, dummy.matrix);
      }
    });
    if (meshRef.current) {
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial color={lightColor} transparent opacity={0.6} />
    </instancedMesh>
  );
}

// Medical Icons as 3D HTML Overlays
function MedicalIcons() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Actively orbit around the center (Y-axis)
      groupRef.current.rotation.y += 0.005;
      // Slight vertical wobble
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Thyroid */}
      <Float speed={2} rotationIntensity={0} floatIntensity={2} position={[-2.5, 1.5, 1]}>
        <Html center transform sprite>
          <div className="bg-white/95 transform-gpu border border-white p-2.5 rounded-2xl shadow-xl flex flex-col items-center gap-1.5 group w-20 hover:scale-110 transition-transform" style={{ willChange: "transform" }}>
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
              <Dna className="w-4 h-4 text-purple-600" />
            </div>
            <span className="text-[9px] font-semibold text-slate-700">Thyroid</span>
          </div>
        </Html>
      </Float>

      {/* Glucose */}
      <Float speed={2.5} rotationIntensity={0} floatIntensity={1.5} position={[2.8, 1, -1]}>
        <Html center transform sprite>
          <div className="bg-white/95 transform-gpu border border-white p-2 pr-4 rounded-2xl shadow-xl flex items-center gap-2.5 hover:scale-110 transition-transform" style={{ willChange: "transform" }}>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <Droplet className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="text-[8px] text-slate-500 font-medium uppercase tracking-wider">Glucose</p>
              <p className="text-sm font-bold text-slate-800 leading-tight">95 <span className="text-[8px] text-slate-500 font-normal">mg/dL</span></p>
            </div>
          </div>
        </Html>
      </Float>

      {/* Hormones */}
      <Float speed={1.8} rotationIntensity={0} floatIntensity={2} position={[-2, -1.8, 0.5]}>
        <Html center transform sprite>
          <div className="bg-white/95 transform-gpu border border-white p-2.5 rounded-2xl shadow-xl flex flex-col items-center gap-1.5 w-20 hover:scale-110 transition-transform" style={{ willChange: "transform" }}>
            <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
              <Syringe className="w-4 h-4 text-teal-600" />
            </div>
            <span className="text-[9px] font-semibold text-slate-700">Hormones</span>
          </div>
        </Html>
      </Float>

      {/* Analytics */}
      <Float speed={2.2} rotationIntensity={0} floatIntensity={1.5} position={[2, -2, 1.5]}>
        <Html center transform sprite>
          <div className="bg-white/95 transform-gpu border border-white p-3 rounded-2xl shadow-xl flex flex-col gap-1.5 w-28 hover:scale-110 transition-transform" style={{ willChange: "transform" }}>
            <div className="flex items-center justify-between">
              <LineChart className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-[8px] font-bold text-emerald-600 bg-emerald-100 px-1 py-0.5 rounded">+2.4%</span>
            </div>
            <div className="space-y-1">
              <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 w-[70%]" />
              </div>
              <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[45%]" />
              </div>
            </div>
          </div>
        </Html>
      </Float>

      {/* Consultation */}
      <Float speed={1.5} rotationIntensity={0} floatIntensity={1} position={[0, 2.5, -2]}>
        <Html center transform sprite>
          <div className="bg-white/95 transform-gpu border border-white p-2 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform" style={{ willChange: "transform" }}>
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-orange-600" />
            </div>
          </div>
        </Html>
      </Float>
    </group>
  );
}

// Scene Rig for Mouse Parallax and Auto Rotation
function SceneRig() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Mouse parallax easing (less pronounced since things are smaller)
      const targetX = (state.pointer.x * Math.PI) / 12;
      const targetY = (state.pointer.y * Math.PI) / 12;
      
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <CentralOrb />
      <Particles count={60} />
      <MedicalIcons />
    </group>
  );
}

export function Hero3DVisual() {
  return (
    <div className="w-full h-[500px] lg:h-[700px] relative flex items-center justify-center">
      {/* Background radial glow so the 3D elements pop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-50 to-teal-50/30 rounded-[3rem] blur-xl opacity-70 pointer-events-none" />
      
      <Canvas 
        camera={{ position: [0, 0, 12], fov: 45 }} 
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#0ea5e9" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#14b8a6" />
        <pointLight position={[0, 0, 5]} intensity={1} color="#ffffff" />
        
        <SceneRig />
      </Canvas>
    </div>
  );
}
