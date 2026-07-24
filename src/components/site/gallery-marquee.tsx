'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

const photo = (n: number) => `/images/Lakeclub%20(${n}).jpg`;

/* Aerials (4, 12, 15, 19) spread apart so no two run back-to-back, including the loop seam. */
const MARQUEE = [2, 6, 12, 7, 15, 25, 20, 19, 29, 4];

export default function GalleryMarquee() {
    const [open, setOpen] = useState<number | null>(null);

    useEffect(() => {
        if (open === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(null);
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <>
            <div className='lc-marquee' aria-label='Photos from The Lake Club'>
                <div className='lc-marquee-track'>
                    {[...MARQUEE, ...MARQUEE].map((n, i) => (
                        <button
                            key={`${n}-${i}`}
                            type='button'
                            className='lc-mq-item lc-media'
                            aria-hidden={i >= MARQUEE.length}
                            tabIndex={i >= MARQUEE.length ? -1 : 0}
                            aria-label='View photo'
                            onClick={() => setOpen(n)}>
                            <Image src={photo(n)} alt='' fill sizes='(max-width: 700px) 60vw, 26vw' style={{ objectFit: 'cover' }} />
                        </button>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {open !== null && (
                <div className='lc-lightbox' role='dialog' aria-modal='true' aria-label='Photo' onClick={() => setOpen(null)}>
                    <Image src={photo(open)} alt='Photo from The Lake Club' fill sizes='100vw' style={{ objectFit: 'contain', padding: 'clamp(16px,4vw,56px)' }} />
                    <button type='button' className='lc-lightbox-close' aria-label='Close photo' onClick={() => setOpen(null)}>
                        <svg width='18' height='18' viewBox='0 0 18 18' fill='none' aria-hidden='true'>
                            <line x1='1' y1='1' x2='17' y2='17' stroke='currentColor' strokeWidth='1.4' />
                            <line x1='17' y1='1' x2='1' y2='17' stroke='currentColor' strokeWidth='1.4' />
                        </svg>
                    </button>
                </div>
            )}

            <style>{`
                .lc-marquee { overflow: hidden; width: 100%; }
                .lc-marquee-track { display: flex; width: max-content; animation: lc-mq 64s linear infinite; }
                .lc-mq-item {
                    position: relative; flex: 0 0 clamp(240px, 26vw, 400px); aspect-ratio: 3 / 4; margin-right: 3px;
                    padding: 0; border: none; background: var(--lc-sand); cursor: zoom-in; display: block;
                }
                @keyframes lc-mq { to { transform: translateX(-50%); } }
                @media (prefers-reduced-motion: reduce){
                    .lc-marquee-track { animation: none; }
                    .lc-marquee { overflow-x: auto; }
                }
                .lc-lightbox {
                    position: fixed; inset: 0; z-index: 200;
                    background: rgba(14,24,34,.94);
                    cursor: zoom-out;
                    animation: lc-lb-in .35s var(--lc-ease);
                }
                @keyframes lc-lb-in { from { opacity: 0; } }
                .lc-lightbox-close {
                    position: absolute; top: 20px; right: 20px; z-index: 2;
                    width: 46px; height: 46px; display: grid; place-items: center;
                    background: transparent; border: 1px solid rgba(255,255,255,.35); color: #fff; cursor: pointer;
                    transition: border-color .3s var(--lc-ease), background .3s var(--lc-ease);
                }
                .lc-lightbox-close:hover { border-color: #fff; background: rgba(255,255,255,.08); }
            `}</style>
        </>
    );
}
