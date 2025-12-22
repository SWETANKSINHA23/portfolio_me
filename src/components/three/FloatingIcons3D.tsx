import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface IconMeshProps {
  position: [number, number, number];
  color: string;
  delay?: number;
}

const GlassCube = ({ position, color, delay = 0 }: IconMeshProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 + delay) * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 + delay;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <MeshTransmissionMaterial
          color={color}
          thickness={0.5}
          roughness={0.1}
          transmission={0.9}
          ior={1.5}
          chromaticAberration={0.02}
        />
      </mesh>
    </Float>
  );
};

const GlassSphere = ({ position, color, delay = 0 }: IconMeshProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <MeshTransmissionMaterial
          color={color}
          thickness={0.3}
          roughness={0.05}
          transmission={0.95}
          ior={1.5}
          chromaticAberration={0.03}
        />
      </mesh>
    </Float>
  );
};

const GlassOctahedron = ({ position, color, delay = 0 }: IconMeshProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + delay;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.3;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.6]} />
        <MeshTransmissionMaterial
          color={color}
          thickness={0.4}
          roughness={0.08}
          transmission={0.92}
          ior={1.5}
          chromaticAberration={0.02}
        />
      </mesh>
    </Float>
  );
};

const FloatingIcons3D = () => {
  const icons = useMemo(() => [
    { Component: GlassCube, position: [-3, 2, -2] as [number, number, number], color: '#3B82F6', delay: 0 },
    { Component: GlassSphere, position: [3, 1, -1] as [number, number, number], color: '#10B981', delay: 1 },
    { Component: GlassOctahedron, position: [-2, -1, 0] as [number, number, number], color: '#8B5CF6', delay: 2 },
    { Component: GlassCube, position: [2.5, -1.5, -1.5] as [number, number, number], color: '#3B82F6', delay: 3 },
    { Component: GlassSphere, position: [-3, -2, -2] as [number, number, number], color: '#10B981', delay: 4 },
    { Component: GlassOctahedron, position: [3.5, 2.5, -2.5] as [number, number, number], color: '#8B5CF6', delay: 5 },
  ], []);

  return (
    <div className="three-canvas" style={{ opacity: 0.6 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#3B82F6" />
        
        {icons.map((icon, index) => (
          <icon.Component
            key={index}
            position={icon.position}
            color={icon.color}
            delay={icon.delay}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default FloatingIcons3D;