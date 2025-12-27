import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Index from "../pages/Index";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Achievements from "../pages/Achievements";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import { TransitionOverlay } from "./TransitionOverlay";

const AnimatedRoutes = () => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState('fadeIn'); // fadeIn, fadeOut
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (location.pathname !== displayLocation.pathname) {

            // START TRANSITION (EXIT PREV PAGE)
            const tl = gsap.timeline({
                onComplete: () => {
                    setDisplayLocation(location);
                    setTransitionStage('fadeIn');
                    window.scrollTo(0, 0); // Reset scroll on new page
                }
            });

            // 1. Overlay Wipe In (Cover screen)
            tl.set('.transition-overlay', { visibility: 'visible' });
            tl.to('.overlay-column', {
                y: '0%',
                duration: 0.5,
                stagger: 0.05,
                ease: 'power3.inOut'
            });

            // 2. Content 3D Exit (Push back)
            // We use containerRef to animate the "Old" page content out
            tl.to(containerRef.current, {
                scale: 0.95,
                opacity: 0,
                rotateY: 5,
                duration: 0.5,
                ease: 'power3.in',
            }, "<"); // Run concurrently

        }
    }, [location, displayLocation]);

    useEffect(() => {
        if (transitionStage === 'fadeIn') {
            // ENTER NEW PAGE
            const tl = gsap.timeline();

            // 1. Prepare Content (It's new DOM now)
            tl.set(containerRef.current, {
                scale: 0.95,
                rotateY: -5,
                opacity: 0
            });

            // 2. Overlay Wipe Out (Reveal new page)
            tl.to('.overlay-column', {
                y: '-100%',
                duration: 0.5,
                stagger: 0.05,
                ease: 'power3.inOut'
            });

            // 3. Content 3D Enter (Bring forward)
            tl.to(containerRef.current, {
                scale: 1,
                rotateY: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power3.out',
                clearProps: 'all' // Clean up transforms mainly
            }, "-=0.3"); // Overlap slightly

            // Hide overlay after done
            tl.set('.transition-overlay', { visibility: 'hidden' });
            // Reset columns for next swipe (move them back to bottom)
            tl.set('.overlay-column', { y: '100%' });
        }
    }, [transitionStage, displayLocation]); // Run whenever displayLocation updates (content matches URL)

    return (
        <>
            <TransitionOverlay />
            <div
                ref={containerRef}
                className="perspective-container origin-center"
                style={{ perspective: '1000px', backfaceVisibility: 'hidden' }}
            >
                <Routes location={displayLocation}>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    );
};

export default AnimatedRoutes;
