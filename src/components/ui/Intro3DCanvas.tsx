"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Html, Sphere, MeshTransmissionMaterial, Environment, Sparkles } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { Activity, Dna, Syringe } from "lucide-react";
import gsap from "gsap";

// Scene 1: Realistic Particles
function MedicalParticles() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 6;
  
  return (
    <group>
      <Sparkles count={isMobile ? 100 : 250} scale={isMobile ? 8 : 15} size={2} speed={0.4} opacity={0.4} color="#0ea5e9" />
      <Sparkles count={isMobile ? 75 : 150} scale={isMobile ? 6 : 12} size={3} speed={0.2} opacity={0.3} color="#14b8a6" />
    </group>
  );
}

// Scene 2 & 3: Ultra-realistic organic glass gland
function CenterGland({ timeline }: { timeline: gsap.core.Timeline | null }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  const { viewport } = useThree();
  const isMobile = viewport.width < 6;

  useEffect(() => {
    if (!meshRef.current || !materialRef.current || !timeline) return;

    const baseScale = isMobile ? 0.6 : 1;
    const expandScale = isMobile ? 0.9 : 1.5;

    // Start small and invisible
    gsap.set(meshRef.current.scale, { x: 0, y: 0, z: 0 });
    gsap.set(materialRef.current, { opacity: 0, transmission: 0 });

    // Scene 1 -> 2: Pulse forms
    timeline.to(meshRef.current.scale, { x: baseScale, y: baseScale, z: baseScale, duration: 1.5, ease: "back.out(1.7)" }, 1);
    timeline.to(materialRef.current, { opacity: 1, transmission: 0.95, duration: 1 }, 1);
    
    // Scene 2: Becomes glowing gland
    timeline.to(materialRef.current, { distortion: 0.6, temporalDistortion: 0.4, duration: 2, ease: "power2.inOut" }, 2.5);
    timeline.to(meshRef.current.scale, { x: expandScale, y: expandScale, z: expandScale, duration: 2, ease: "power2.inOut" }, 2.5);

    // Scene 4: Exit
    timeline.to(meshRef.current.scale, { x: 0, y: 0, z: 0, duration: 1, ease: "power3.in" }, 5.5);
    timeline.to(materialRef.current, { opacity: 0, duration: 0.5 }, 6);

  }, [timeline, isMobile]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 128, 128]}>
      <MeshTransmissionMaterial 
        ref={materialRef}
        color="#14b8a6"
        resolution={1024}
        transmission={0}
        opacity={0}
        transparent
        thickness={2}
        roughness={0.05}
        ior={1.33}
        chromaticAberration={0.08}
        anisotropy={0.5}
        distortion={0}
        distortionScale={0.5}
        temporalDistortion={0}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </Sphere>
  );
}

function GlassIcon({ icon: Icon, color, position, delay, timeline }: any) {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const isMobile = viewport.width < 6;
  
  useEffect(() => {
    if (!groupRef.current || !timeline) return;
    
    // Calculate mobile-friendly positions
    const targetX = isMobile ? position[0] * 0.45 : position[0];
    const targetY = isMobile ? position[1] * 0.8 : position[1];
    const targetZ = position[2];
    const targetScale = isMobile ? 0.7 : 1;
    
    gsap.set(groupRef.current.position, { x: 0, y: 0, z: 0 });
    gsap.set(groupRef.current.scale, { x: 0, y: 0, z: 0 });

    timeline.to(groupRef.current.scale, { x: targetScale, y: targetScale, z: targetScale, duration: 1, ease: "back.out(1.5)" }, 3 + delay);
    timeline.to(groupRef.current.position, { 
      x: targetX, 
      y: targetY, 
      z: targetZ, 
      duration: 1.5, 
      ease: "power3.out" 
    }, 3 + delay);

    // Exit
    timeline.to(groupRef.current.scale, { x: 0, y: 0, z: 0, duration: 0.8, ease: "power3.in" }, 5.5 + delay * 0.2);
  }, [timeline, position, delay, isMobile]);

  return (
    <group ref={groupRef}>
      <Float speed={3} rotationIntensity={0.5} floatIntensity={2}>
        <Html center transform sprite>
          <div className="bg-white/30 backdrop-blur-2xl border border-white/60 p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-[0_8px_32px_0_rgba(20,184,166,0.2)] flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
            <Icon className={`w-6 h-6 md:w-8 md:h-8 ${color}`} strokeWidth={1.5} />
          </div>
        </Html>
      </Float>
    </group>
  );
}

function EnergyRing({ timeline }: { timeline: gsap.core.Timeline | null }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  
  useEffect(() => {
    if (!meshRef.current || !materialRef.current || !timeline) return;
    
    gsap.set(meshRef.current.scale, { x: 0, y: 0, z: 0 });
    gsap.set(materialRef.current, { opacity: 0 });

    // Scene 3: Ring forms
    timeline.to(meshRef.current.scale, { x: 1, y: 1, z: 1, duration: 1.5, ease: "power3.out" }, 4);
    timeline.to(materialRef.current, { opacity: 0.8, duration: 1 }, 4);

    // Scene 4: Ring expands and washes screen
    timeline.to(meshRef.current.scale, { x: 15, y: 15, z: 15, duration: 1.5, ease: "power2.in" }, 5.5);
    timeline.to(materialRef.current, { opacity: 0, duration: 1, ease: "power2.in" }, 6);
  }, [timeline]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[3.5, 0.015, 32, 128]} />
      <meshStandardMaterial 
        ref={materialRef}
        color="#0ea5e9"
        emissive="#14b8a6"
        emissiveIntensity={2}
        transparent 
        opacity={0} 
      />
    </mesh>
  );
}

export function Intro3DCanvas({ timeline }: { timeline: gsap.core.Timeline | null }) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 45 }} 
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Environment preset="city" />
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} intensity={3} angle={0.15} penumbra={1} color="#0ea5e9" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#14b8a6" />
        
        <MedicalParticles />
        
        <CenterGland timeline={timeline} />
        <EnergyRing timeline={timeline} />

        <GlassIcon icon={Activity} color="text-emerald-500" position={[-3.5, 2, 0]} delay={0} timeline={timeline} />
        <GlassIcon icon={Dna} color="text-purple-500" position={[3.5, 1.5, 1]} delay={0.2} timeline={timeline} />
        <GlassIcon icon={Syringe} color="text-teal-500" position={[0, -2.5, 2.5]} delay={0.4} timeline={timeline} />
      </Canvas>
    </div>
  );
}
