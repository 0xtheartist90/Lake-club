'use client';

import { type ReactNode, useEffect, useRef } from 'react';

/**
 * Background parallax — the wrapped media drifts slower than the page.
 * Scaled up slightly so edges never show. Runs on rAF (plays nice with Lenis).
 * Off for prefers-reduced-motion.
 */
export default function Parallax({
    children,
    strength = 70,
    scale = 1.14
}: {
    children: ReactNode;
    strength?: number;
    scale?: number;
}) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        const parent = el?.parentElement;
        if (!el || !parent) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            el.style.transform = 'none';

            return;
        }

        const update = () => {
            const r = parent.getBoundingClientRect();
            const vh = window.innerHeight;
            // -1 (section below viewport) … 1 (section above viewport)
            const progress = (r.top + r.height / 2 - vh / 2) / ((vh + r.height) / 2);
            const clamped = Math.max(-1, Math.min(1, progress));
            el.style.transform = `translate3d(0, ${(-clamped * strength).toFixed(1)}px, 0) scale(${scale})`;
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update, { passive: true });

        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, [strength, scale]);

    return (
        <div ref={ref} style={{ position: 'absolute', inset: 0, willChange: 'transform' }} aria-hidden='true'>
            {children}
        </div>
    );
}
