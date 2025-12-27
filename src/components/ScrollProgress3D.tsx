import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LiquidShaderMaterial = {
    uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color("#0EA5E9") }, // Sky Blue
        uColor2: { value: new THREE.Color("#ec4899") }, // Pink
        uColor3: { value: new THREE.Color("#f59e0b") }, // Amber
    },
    vertexShader: `
        varying vec2 vUv;
        uniform float uTime;
        void main() {
            vUv = uv;
            vec3 pos = position;
            // Wave Effect
            pos.z += sin(pos.x * 10.0 + uTime) * 0.1;
            pos.y += cos(pos.x * 15.0 + uTime * 1.5) * 0.05;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,
    fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        varying vec2 vUv;

        void main() {
            // Gradient mix based on UV x position
            vec3 color = mix(uColor1, uColor2, vUv.x);
            color = mix(color, uColor3, smoothstep(0.5, 1.0, vUv.x));
            
            // Add some shimmer
            float shimmer = sin(vUv.x * 20.0 - uTime * 3.0) * 0.1;
            color += shimmer;

            gl_FragColor = vec4(color, 1.0);
        }
    `
};

const LiquidBar = () => {
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
        }
    });

    return (
        <Plane args={[10, 1, 32, 1]}>
            <shaderMaterial
                ref={materialRef}
                args={[LiquidShaderMaterial]}
                wireframe={false}
            />
        </Plane>
    );
};

export const ScrollProgress3D = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        // Animate width from 0 to 100% based on scroll
        gsap.to(el, {
            width: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: document.body,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.2
            }
        });
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed top-0 left-0 h-1.5 z-[9999999] pointer-events-none overflow-hidden shadow-[0_0_15px_rgba(14,165,233,0.6)]"
            style={{ width: '0%' }}
        >
            <Canvas
                camera={{ position: [0, 0, 1], fov: 75 }}
                resize={{ scroll: false }}
                dpr={[1, 1.5]}
                gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
            >
                <LiquidBar />
            </Canvas>
        </div>
    );
};
