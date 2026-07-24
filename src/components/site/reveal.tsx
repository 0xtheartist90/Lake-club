'use client';

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from 'react';

export default function Reveal({
    children,
    delay = 0,
    className = '',
    style,
    as: Tag = 'div'
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
    style?: CSSProperties;
    as?: 'div' | 'section' | 'li' | 'span';
}) {
    const ref = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
        );
        obs.observe(el);

        return () => obs.disconnect();
    }, []);

    const Component = Tag as any;

    return (
        <Component
            ref={ref}
            className={`lc-reveal ${inView ? 'is-in' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms`, ...style }}>
            {children}
        </Component>
    );
}
