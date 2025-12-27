import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    size: number;
}

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const requestRef = useRef<number>();
    const mouse = useRef({ x: -100, y: -100 });
    const delayedMouse = useRef({ x: -100, y: -100 }); // For smooth lerp

    useEffect(() => {
        // Hide default cursor
        document.body.style.cursor = 'none';

        // Event Listeners
        const onMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };

            // Magnetic Effect Check
            const target = e.target as HTMLElement;
            const isInteractive = target.closest('a, button, input, .interactive');

            if (isInteractive && cursorRef.current) {
                gsap.to(cursorRef.current, { scale: 3, opacity: 0.5, duration: 0.3 });
            } else if (cursorRef.current) {
                gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3 });
            }
        };

        window.addEventListener('mousemove', onMouseMove);

        // Canvas Setup
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Resize handling
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Animation Loop
        const animate = () => {
            // Lerp cursor position
            delayedMouse.current.x += (mouse.current.x - delayedMouse.current.x) * 0.15;
            delayedMouse.current.y += (mouse.current.y - delayedMouse.current.y) * 0.15;

            // Update React/DOM cursor
            if (cursorRef.current) {
                gsap.set(cursorRef.current, {
                    x: delayedMouse.current.x,
                    y: delayedMouse.current.y
                });
            }

            // Clear Canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Spawn Particles
            // Only spawn if moving
            const dx = mouse.current.x - delayedMouse.current.x;
            const dy = mouse.current.y - delayedMouse.current.y;
            // Sky Blue: #0EA5E9 -> RGB: 14, 165, 233
            const speed = Math.sqrt(dx * dx + dy * dy);

            if (speed > 1) {
                particles.current.push({
                    x: delayedMouse.current.x,
                    y: delayedMouse.current.y,
                    vx: (Math.random() - 0.5) * 2, // Slight random spread
                    vy: (Math.random() - 0.5) * 2,
                    life: 1.0,
                    size: Math.random() * 3 + 2
                });
            }

            // Update & Draw Particles
            for (let i = 0; i < particles.current.length; i++) {
                const p = particles.current[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.02; // Fade rate
                p.size *= 0.95; // Shrink

                if (p.life <= 0) {
                    particles.current.splice(i, 1);
                    i--;
                    continue;
                }

                ctx.beginPath();
                // Sky blue gradient to transparent
                // #0EA5E9 -> rgb(14, 165, 233)
                ctx.fillStyle = `rgba(14, 165, 233, ${p.life})`;
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', resizeCanvas);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            document.body.style.cursor = 'auto'; // Restore on unmount
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
                style={{
                    background: 'radial-gradient(circle, rgba(14,165,233,0.8) 0%, rgba(14,165,233,0) 70%)',
                    boxShadow: '0 0 10px rgba(14,165,233,0.5)'
                }}
            />
            <canvas
                ref={canvasRef}
                className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998]"
            />
        </>
    );
};

export default CustomCursor;
