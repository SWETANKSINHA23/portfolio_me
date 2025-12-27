import { useRef, useEffect } from 'react';
import gsap from 'gsap';

// The Overlay component is just a visual layer.
// The ANIMATION LOGIC will be driven by AnimatedRoutes or a context.
// Here we just render the structure needed for the "Wipe" effect.

export const TransitionOverlay = () => {
    return (
        <div
            className="transition-overlay fixed inset-0 z-[99999] pointer-events-none flex"
            style={{ visibility: 'hidden' }} // Hidden by default, GSAP will show it
        >
            {/* 5 Column Wipe Effect */}
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    className="overlay-column flex-1 bg-slate-800 border-r border-slate-700/50 last:border-none origin-bottom transform translate-y-full"
                />
            ))}
        </div>
    );
};
