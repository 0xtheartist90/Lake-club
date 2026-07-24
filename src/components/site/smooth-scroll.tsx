'use client';

import { useEffect } from 'react';

import Lenis from 'lenis';

/**
 * Lenis smooth scrolling — relaxed, slightly delayed scroll feel.
 * Low lerp = the page eases toward the scroll position instead of snapping.
 * Disabled for prefers-reduced-motion users.
 */
export default function SmoothScroll() {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const lenis = new Lenis({
            lerp: 0.075,
            wheelMultiplier: 0.9,
            touchMultiplier: 1.4
        });

        let raf = requestAnimationFrame(function loop(time) {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        });

        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
        };
    }, []);

    return null;
}
