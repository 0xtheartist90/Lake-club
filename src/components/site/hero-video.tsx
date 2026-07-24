'use client';

import { useEffect, useRef } from 'react';

/**
 * Muted looping background video for the hero.
 * Sits above the poster <Image>, below the gradient scrims.
 * Respects prefers-reduced-motion (stays on the still image).
 * Sources are tried in order — drop the original site's file at
 * public/videos/lakeclub-hero-horizontal-v1.mp4 and it takes over automatically.
 */
export default function HeroVideo({ sources }: { sources: string[] }) {
    const ref = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const v = ref.current;
        if (!v) return;
        // React doesn't serialize `muted` into SSR markup — set it before play()
        v.muted = true;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        v.play().catch(() => {
            /* autoplay blocked — poster image stays visible */
        });
    }, []);

    return (
        <video
            ref={ref}
            muted
            loop
            playsInline
            autoPlay
            preload='metadata'
            aria-hidden='true'
            tabIndex={-1}
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 40%'
            }}>
            {sources.map((s) => (
                <source key={s} src={s} type='video/mp4' />
            ))}
        </video>
    );
}
