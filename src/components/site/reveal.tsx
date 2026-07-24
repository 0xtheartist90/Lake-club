'use client';

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from 'react';

export default function Reveal({
    children,
    delay = 0,
    className = '',
    style,
    variant = 'up',
    as: Tag = 'div'
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
    style?: CSSProperties;
    variant?: 'up' | 'fade' | 'image';
    as?: 'div' | 'section' | 'li' | 'span';
}) {
    const ref = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Fail-open: if it's already on screen at mount, reveal right away.
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            setInView(true);

            return;
        }

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
        );
        obs.observe(el);

        // Safety net: never let content stay hidden if the observer never fires
        // (e.g. a backgrounded tab where IntersectionObserver is suspended).
        const safety = window.setTimeout(() => setInView(true), 2600);

        return () => {
            obs.disconnect();
            window.clearTimeout(safety);
        };
    }, []);

    const Component = Tag as any;
    const variantClass = variant === 'up' ? '' : `lc-reveal--${variant}`;

    return (
        <Component
            ref={ref}
            className={`lc-reveal ${variantClass} ${inView ? 'is-in' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms`, ...style }}>
            {children}
        </Component>
    );
}
