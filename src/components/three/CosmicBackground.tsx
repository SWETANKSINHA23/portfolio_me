import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const StarField = ({ count = 6000 }) => {
    const mesh = useRef<THREE.Points>(null);

    const { positions, colors } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const color1 = new THREE.Color("#0EA5E9"); // Sky Blue
        const color2 = new THREE.Color("#EC4899"); // Hot Pink
        const color3 = new THREE.Color("#64748B"); // Cool Grey

        for (let i = 0; i < count; i++) {
            const d = 4000;
            const x = THREE.MathUtils.randFloatSpread(d);
            const y = THREE.MathUtils.randFloatSpread(d);
            const z = THREE.MathUtils.randFloatSpread(d);
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Randomly assign one of the theme colors
            const randomColor = Math.random();
            let c = color1;
            if (randomColor > 0.33) c = color2;
            if (randomColor > 0.66) c = color3;

            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }
        return { positions, colors };
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;

        // Constant slow rotation with complex axis
        const time = state.clock.getElapsedTime();
        mesh.current.rotation.y = time * 0.02;
        mesh.current.rotation.z = time * 0.01;

        // Scroll based rotation influence
        const scrollY = window.scrollY;
        mesh.current.rotation.x = scrollY * 0.0002;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={2}
                vertexColors
                sizeAttenuation={true}
                depthWrite={false}
                transparent
                opacity={0.6}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

const CosmicBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-[#0D0D0D]">
            <Canvas
                camera={{ position: [0, 0, 1000], fov: 75 }}
                gl={{ antialias: false, alpha: false }}
                dpr={[1, 1.5]}
            >
                <StarField />
            </Canvas>
        </div>
    );
};

export default CosmicBackground;
