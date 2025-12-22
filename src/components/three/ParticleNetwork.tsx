import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

const Particles = ({ count = 150, mouse }: ParticlesProps) => {
  const mesh = useRef<THREE.Points>(null);
  const linesMesh = useRef<THREE.LineSegments>(null);
  
  const particlesData = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities: THREE.Vector3[] = [];
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 5;
      
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.005
      ));
    }
    
    return { positions, velocities };
  }, [count]);
  
  const linesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const maxConnections = count * 10;
    const linePositions = new Float32Array(maxConnections * 6);
    geometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    return geometry;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Add mouse influence
      const mouseInfluenceX = mouse.current.x * 0.5;
      const mouseInfluenceY = mouse.current.y * 0.5;
      
      positions[i3] += particlesData.velocities[i].x + Math.sin(time * 0.5 + i) * 0.002 + mouseInfluenceX * 0.001;
      positions[i3 + 1] += particlesData.velocities[i].y + Math.cos(time * 0.3 + i) * 0.002 + mouseInfluenceY * 0.001;
      positions[i3 + 2] += particlesData.velocities[i].z + Math.sin(time * 0.2 + i) * 0.001;
      
      // Boundary check
      if (Math.abs(positions[i3]) > 5) particlesData.velocities[i].x *= -1;
      if (Math.abs(positions[i3 + 1]) > 5) particlesData.velocities[i].y *= -1;
      if (Math.abs(positions[i3 + 2]) > 3) particlesData.velocities[i].z *= -1;
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
    
    // Update connections
    if (linesMesh.current) {
      const linePositions = linesGeometry.attributes.position.array as Float32Array;
      let lineIndex = 0;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        for (let j = i + 1; j < count; j++) {
          const j3 = j * 3;
          const distance = Math.sqrt(
            Math.pow(positions[i3] - positions[j3], 2) +
            Math.pow(positions[i3 + 1] - positions[j3 + 1], 2) +
            Math.pow(positions[i3 + 2] - positions[j3 + 2], 2)
          );
          
          if (distance < 1.5 && lineIndex < linePositions.length - 6) {
            linePositions[lineIndex++] = positions[i3];
            linePositions[lineIndex++] = positions[i3 + 1];
            linePositions[lineIndex++] = positions[i3 + 2];
            linePositions[lineIndex++] = positions[j3];
            linePositions[lineIndex++] = positions[j3 + 1];
            linePositions[lineIndex++] = positions[j3 + 2];
          }
        }
      }
      
      linesGeometry.setDrawRange(0, lineIndex / 3);
      linesGeometry.attributes.position.needsUpdate = true;
    }
    
    // Slow rotation
    mesh.current.rotation.y = time * 0.02;
    if (linesMesh.current) linesMesh.current.rotation.y = time * 0.02;
  });

  return (
    <>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={particlesData.positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#3B82F6"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesMesh} geometry={linesGeometry}>
        <lineBasicMaterial color="#3B82F6" transparent opacity={0.15} />
      </lineSegments>
    </>
  );
};

const CameraController = () => {
  const { camera } = useThree();
  
  useFrame((state) => {
    camera.position.z = 6 + Math.sin(state.clock.elapsedTime * 0.1) * 0.5;
  });
  
  return null;
};

const ParticleNetwork = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="three-canvas">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0A0A0A']} />
        <fog attach="fog" args={['#0A0A0A', 5, 15]} />
        <ambientLight intensity={0.5} />
        <CameraController />
        <Particles count={100} mouse={mouse} />
      </Canvas>
    </div>
  );
};

export default ParticleNetwork;