import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, Html, QuadraticBezierLine } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion-3d';

// Color palette
const GLOBE_COLOR = "#0EA5E9"; // Sky blue
const MARKER_COLOR = "#F43F5E"; // Rose for user location
const MARKER_COLOR_2 = "#10B981"; // Emerald for projects
const LINE_COLOR = "#0EA5E9";

// Helper to convert Lat/Lon to 3D Cartesian coordinates
// Radius = 5
const calcPosFromLatLonRad = (lat: number, lon: number, radius: number) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = (radius * Math.sin(phi) * Math.sin(theta));
    const y = (radius * Math.cos(phi));

    return [x, y, z] as [number, number, number];
};

// Locations
// Punjab: ~31°N, 75°E
// Bangalore: ~12°N, 77°E
// Silicon Valley: ~37°N, -122°W
const LOCATIONS = [
    { name: 'Punjab', lat: 31, lon: 75, color: MARKER_COLOR, label: 'Home' },
    { name: 'Bangalore', lat: 12.9, lon: 77.5, color: MARKER_COLOR_2, label: 'Projects' },
    { name: 'Silicon Valley', lat: 37.4, lon: -122, color: MARKER_COLOR_2, label: 'Inspiration' }
];

const LocationMarker = ({ position, color, label }: { position: [number, number, number], color: string, label: string }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <group position={position}>
            <mesh
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshBasicMaterial color={color} />
            </mesh>
            {/* Pulsing ring */}
            <mesh scale={[1.5, 1.5, 1.5]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshBasicMaterial color={color} transparent opacity={0.3} />
            </mesh>
            <Html distanceFactor={15}>
                <div className={`pointer-events-none transition-all duration-300 ${hovered ? 'opacity-100 scale-110' : 'opacity-70 scale-100'}`}>
                    <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 px-3 py-1 rounded-lg text-xs text-white whitespace-nowrap shadow-xl">
                        <span className="font-bold text-sky-400">{label}</span>
                        <div className="text-[10px] text-slate-300">{LOCATIONS.find(l => l.label === label)?.name}</div>
                    </div>
                </div>
            </Html>
        </group>
    );
};

const AnimatedConnection = ({ start, end }: { start: [number, number, number], end: [number, number, number] }) => {
    // Calculate mid-point for the Bezier curve (elevated keypoint)
    const mid = [
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2,
        (start[2] + end[2]) / 2
    ] as [number, number, number];

    // Push mid point out from center to create arc
    const midLen = Math.sqrt(mid[0] ** 2 + mid[1] ** 2 + mid[2] ** 2);
    const radius = 5;
    const arcHeight = radius * 1.5; // How high the arc goes

    const controlPoint = [
        (mid[0] / midLen) * arcHeight,
        (mid[1] / midLen) * arcHeight,
        (mid[2] / midLen) * arcHeight
    ] as [number, number, number];

    return (
        <QuadraticBezierLine
            start={start}
            end={end}
            mid={controlPoint}
            color={LINE_COLOR}
            lineWidth={1.5}
            transparent
            opacity={0.6}
            dashed={false} // Simple solid line for now, dash animation can be complex with BezierLine
        />
    );
};

const GlobeScene = () => {
    const globeRef = useRef<THREE.Group>(null);
    const radius = 5;

    // Convert locations to vectors
    const markers = useMemo(() => LOCATIONS.map(loc => ({
        ...loc,
        pos: calcPosFromLatLonRad(loc.lat, loc.lon, radius)
    })), []);

    // Home location (Punjab)
    const home = markers[0];

    // Connect Home to others
    const connections = markers.slice(1).map(target => ({
        start: home.pos,
        end: target.pos
    }));

    useFrame((state, delta) => {
        if (globeRef.current) {
            globeRef.current.rotation.y += 0.05 * delta;
        }
    });

    return (
        <group ref={globeRef}>
            {/* Wireframe Sphere */}
            <Sphere args={[radius, 32, 32]}>
                <meshBasicMaterial
                    color={GLOBE_COLOR}
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </Sphere>

            {/* Inner Glow Sphere (Optional solid core for depth) */}
            <Sphere args={[radius * 0.98, 32, 32]}>
                <meshBasicMaterial color="#000000" transparent opacity={0.9} />
            </Sphere>

            {/* Markers */}
            {markers.map((marker, idx) => (
                <LocationMarker
                    key={idx}
                    position={marker.pos}
                    color={marker.color}
                    label={marker.label}
                />
            ))}

            {/* Connections */}
            {connections.map((conn, idx) => (
                <AnimatedConnection key={idx} start={conn.start} end={conn.end} />
            ))}
        </group>
    );
};

export const InteractiveGlobe = () => {
    return (
        <div className="w-full h-[500px] cursor-move relative">
            <Canvas camera={{ position: [0, 0, 14], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <GlobeScene />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 1.5}
                    autoRotate
                    autoRotateSpeed={0.5}
                />
            </Canvas>

            {/* Overlay Tip */}
            <div className="absolute bottom-4 right-4 text-[10px] text-muted-foreground/50 pointer-events-none">
                Drag to rotate
            </div>
        </div>
    );
};
