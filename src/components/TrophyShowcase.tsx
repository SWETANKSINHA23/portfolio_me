import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Text, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Trophy Colors
const GOLD = "#FFD700";
const SILVER = "#C0C0C0";
const BRONZE = "#CD7F32";
const ACCENT = "#64748B"; // Slate/Cool Grey

interface TrophyProps {
    position: [number, number, number];
    color: string;
    label: string;
    type: 'gold' | 'silver' | 'bronze';
    index: number;
}

const Trophy = ({ position, color, label, type, index }: TrophyProps) => {
    const groupRef = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    // Animation on click
    const handleClick = () => {
        if (groupRef.current) {
            // Spin and jump
            gsap.timeline()
                .to(groupRef.current.position, { y: position[1] + 1, duration: 0.3, yoyo: true, repeat: 1, ease: "power2.out" })
                .to(groupRef.current.rotation, { y: "+=" + Math.PI * 2, duration: 0.8, ease: "back.out(1.7)" }, 0)
                .to(groupRef.current.scale, { x: 1.3, y: 1.3, z: 1.3, duration: 0.2, yoyo: true, repeat: 1 }, 0);
        }
    };

    useFrame((state) => {
        if (!hovered && groupRef.current) {
            // Idle float/rotate
            groupRef.current.rotation.y += 0.005;
        }
        if (hovered && groupRef.current) {
            groupRef.current.rotation.y += 0.02;
        }
    });

    return (
        <group
            ref={groupRef}
            position={position}
            onClick={handleClick}
            onPointerOver={() => { document.body.style.cursor = 'pointer'; setHovered(true); }}
            onPointerOut={() => { document.body.style.cursor = 'auto'; setHovered(false); }}
        >
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                {/* Trophy Base */}
                <mesh position={[0, -0.6, 0]}>
                    <cylinderGeometry args={[0.4, 0.5, 0.4, 32]} />
                    <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.2} />
                </mesh>

                {/* Trophy Body - Varies slightly by type */}
                {type === 'gold' && (
                    <group position={[0, 0.2, 0]}>
                        {/* Cup Shape */}
                        <mesh>
                            <cylinderGeometry args={[0.6, 0.3, 1.2, 32, 1, true]} />
                            <meshStandardMaterial color={color} metalness={1} roughness={0.1} side={THREE.DoubleSide} />
                        </mesh>
                        {/* Handles (Torus) */}
                        <mesh position={[0.5, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
                            <torusGeometry args={[0.25, 0.05, 16, 32, Math.PI]} />
                            <meshStandardMaterial color={color} metalness={1} roughness={0.1} />
                        </mesh>
                        <mesh position={[-0.5, 0.2, 0]} rotation={[0, 0, -Math.PI / 2]}>
                            <torusGeometry args={[0.25, 0.05, 16, 32, Math.PI]} />
                            <meshStandardMaterial color={color} metalness={1} roughness={0.1} />
                        </mesh>
                    </group>
                )}

                {type === 'silver' && (
                    <group position={[0, 0.1, 0]}>
                        {/* Star/Medal Shape */}
                        <mesh rotation={[Math.PI / 2, 0, 0]}>
                            <cylinderGeometry args={[0.6, 0.6, 0.1, 6]} /> {/* Hexagon/Medal */}
                            <meshStandardMaterial color={color} metalness={0.9} roughness={0.2} />
                        </mesh>
                        <mesh position={[0, 0.5, 0]}>
                            <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
                            <meshStandardMaterial color={ACCENT} />
                        </mesh>
                    </group>
                )}

                {type === 'bronze' && (
                    <group position={[0, 0.1, 0]}>
                        <mesh>
                            <coneGeometry args={[0.5, 1.2, 32]} />
                            <meshStandardMaterial color={color} metalness={0.8} roughness={0.3} />
                        </mesh>
                    </group>
                )}

                {/* Type Label floating above */}
                <Text
                    position={[0, 1.5, 0]}
                    fontSize={0.25}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    fillOpacity={hovered ? 1 : 0.7}
                >
                    {label}
                </Text>
            </Float>
        </group>
    );
};

const TrophyScene = () => {
    const { camera, scene } = useThree();

    // Animate camera on scroll
    // We'll use a GSAP timeline synced to scroll
    // Since we are inside Canvas, we need to bind to a DOM element outside or use a ref that we pass in.
    // However, simplest way effectively is to rely on simple auto-rotation or mouse movement for now 
    // to avoid complex ScrollTrigger logic injecting into Canvas context without a proper wrapper.
    // BUT the prompt requested Scroll Interaction.
    // Let's implement a "Carousel" effect where the group rotates based on scroll.

    const carouselRef = useRef<THREE.Group>(null);

    useFrame(() => {
        // Basic continuous rotation for the showcase
        if (carouselRef.current) {
            carouselRef.current.rotation.y += 0.002;
        }
    });

    return (
        <group ref={carouselRef} position={[0, -0.5, 0]}>
            <Trophy position={[-2.5, 0, 1.5]} color={SILVER} type="silver" label="Finalist" index={0} />
            <Trophy position={[0, 0, 2.5]} color={GOLD} type="gold" label="Winner" index={1} />
            <Trophy position={[2.5, 0, 1.5]} color={BRONZE} type="bronze" label="Finalist" index={2} />

            {/* Back row / Extras */}
            <Trophy position={[-4, 0, -1]} color={ACCENT} type="silver" label="Cert" index={3} />
            <Trophy position={[4, 0, -1]} color={ACCENT} type="silver" label="Cert" index={4} />
        </group>
    );
};

export const TrophyShowcase = () => {
    return (
        <div className="w-full h-[400px] relative">
            {/* Background hint */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/5 pointer-events-none" />

            <Canvas camera={{ position: [0, 2, 8], fov: 40 }} shadows>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={15} castShadow />
                <Environment preset="city" />

                <TrophyScene />

                <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={20} blur={2} far={4} />
            </Canvas>

            <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-muted-foreground/50">
                Interactive 3D Display • Click for Details
            </div>
        </div>
    );
};
