'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

export default function FeatureCarousel({
    images,
    alt,
    interval = 3800
}: {
    images: string[];
    alt: string;
    interval?: number;
}) {
    const [i, setI] = useState(0);

    useEffect(() => {
        if (images.length < 2) return;
        const id = setInterval(() => setI((v) => (v + 1) % images.length), interval);

        return () => clearInterval(id);
    }, [images.length, interval]);

    return (
        <div style={{ position: 'absolute', inset: 0 }}>
            {images.map((src, idx) => (
                <Image
                    key={src}
                    src={src}
                    alt={idx === i ? alt : ''}
                    aria-hidden={idx !== i}
                    fill
                    sizes='(max-width: 920px) 100vw, 45vw'
                    style={{
                        objectFit: 'cover',
                        opacity: idx === i ? 1 : 0,
                        transition: 'opacity 1.4s var(--lc-ease)'
                    }}
                />
            ))}
        </div>
    );
}
