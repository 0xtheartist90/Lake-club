'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import { ArrowUpRight } from 'lucide-react';

import Parallax from './parallax';
import Reveal from './reveal';

/* Real Google reviews from the Lake Club listing — the featured quote rotates through these. */
const REVIEWS = [
    { a: 'Krista L.', s: 5, t: 'The service is 5 star, and the views are magical. Winter, spring, summer or fall, it’s always a beautiful experience. My favorite restaurant at Friday Harbour!' },
    { a: 'Ida Z.', s: 5, t: 'It feels like a staycation whenever we come to the Lake Club. Great food and even better service — it’s truly a treat in the city.' },
    { a: 'Saundra', s: 5, t: 'Gorgeous restaurant with amazing views of Friday Harbour. Service was impeccable and the menu offered so many delicious choices.' },
    { a: 'Wendy M.', s: 5, t: 'We came for dessert for our anniversary. The tower cake was a fabulous way to celebrate with our daughter and grandsons. The atmosphere was perfect!' },
    { a: 'Stephen & Jenn F.', s: 5, t: 'Sitting by the water with great service and food is a very nice way to enjoy an Ontario summer. The trout and beets and the salmon pesto were very well prepared.' },
    { a: 'Aidan A.', s: 5, t: 'Stunning lake views set a lovely atmosphere. The staff were incredibly friendly and attentive, our meals were delicious, service was impressively fast.' },
    { a: 'Dominic L.', s: 5, t: 'Always a fun time at Lake Club — from business dinners to date nights. Amazing food, great service, and the best patio on the lake.' }
];

function Stars({ n = 5, size = 11 }: { n?: number; size?: number }) {
    return (
        <span style={{ display: 'inline-flex', gap: 3, color: 'var(--lc-accent)' }} aria-label={`${n} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width={size} height={size} viewBox='0 0 24 24' fill='currentColor' aria-hidden='true' style={{ opacity: i < n ? 1 : 0.25 }}>
                    <path d='M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6z' />
                </svg>
            ))}
        </span>
    );
}

export default function Testimonials() {
    const [i, setI] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => setI((v) => (v + 1) % REVIEWS.length), 6000);

        return () => clearInterval(id);
    }, [paused]);

    return (
        <section className='lc-revq' aria-label='What our guests say' id='reviews'>
            <div className='lc-revq-in'>
                <div className='lc-revq-grid'>
                    {/* Rating rail */}
                    <Reveal className='lc-revq-rail'>
                        <div className='lc-mono' style={{ color: 'var(--lc-accent)', letterSpacing: '0.32em', fontSize: 10 }}>
                            In their words
                        </div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 20 }}>
                            <span className='lc-display' style={{ fontSize: 'clamp(56px,7vw,92px)', color: 'var(--lc-ink)', lineHeight: 0.9 }}>
                                4.4
                            </span>
                            <Stars size={20} />
                        </div>
                        <div className='lc-mono' style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--lc-ink-soft)', marginTop: 14 }}>
                            293 Google reviews
                        </div>
                        <a
                            href='https://www.google.com/maps?cid=2256011672654664302'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='lc-mono lc-revq-all'>
                            Read them all on Google <ArrowUpRight size={13} strokeWidth={1.7} />
                        </a>
                    </Reveal>

                    {/* Rotating quote */}
                    <Reveal delay={80}>
                      <div
                        className='lc-revq-stage'
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}>
                        {REVIEWS.map((r, idx) => (
                            <blockquote key={r.a} className={`lc-revq-quote ${idx === i ? 'is-active' : ''}`} aria-hidden={idx !== i}>
                                <p className='lc-display lc-revq-featured'>
                                    <span className='lc-italic' style={{ color: 'var(--lc-accent)' }}>&ldquo;</span>
                                    {r.t}
                                    <span className='lc-italic' style={{ color: 'var(--lc-accent)' }}>&rdquo;</span>
                                </p>
                                <footer style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 }}>
                                    <Stars n={r.s} />
                                    <span className='lc-mono' style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--lc-ink)' }}>
                                        {r.a} · Google review
                                    </span>
                                </footer>
                            </blockquote>
                        ))}

                        <div className='lc-revq-dots' role='tablist' aria-label='Reviews'>
                            {REVIEWS.map((r, idx) => (
                                <button
                                    key={r.a}
                                    role='tab'
                                    aria-selected={idx === i}
                                    aria-label={`Review ${idx + 1}`}
                                    onClick={() => setI(idx)}
                                    className={`lc-revq-dot ${idx === i ? 'is-active' : ''}`}
                                />
                            ))}
                        </div>
                      </div>
                    </Reveal>

                    {/* Guest photo */}
                    <Reveal variant='image' delay={140} className='lc-media lc-frame lc-revq-photo'>
                        <Parallax strength={40} scale={1.16}>
                            <Image
                                src='/images/Lakeclub%20(17).jpg'
                                alt='Guests sharing a meal at The Lake Club'
                                fill
                                sizes='(max-width: 1000px) 100vw, 24vw'
                                style={{ objectFit: 'cover' }}
                            />
                        </Parallax>
                    </Reveal>
                </div>
            </div>

            <style>{`
                .lc-revq { position: relative; overflow: hidden; background: var(--lc-cream); padding: clamp(80px,10vw,150px) 0; }
                /* palm-leaf pattern faintly blended into the cream background */
                .lc-revq::before {
                    content: ''; position: absolute; inset: 0; z-index: 0; pointer-events: none;
                    background-image: url(/backgroundpattern2.jpg);
                    background-repeat: repeat;
                    background-size: clamp(300px, 26vw, 420px) auto;
                    mix-blend-mode: multiply;
                    opacity: 0.05;
                }
                .lc-revq-in { position: relative; z-index: 1; max-width: 1360px; margin: 0 auto; padding: 0 clamp(20px,3vw,48px); }
                .lc-revq-grid { display: grid; grid-template-columns: 0.7fr 1.7fr 0.75fr; gap: clamp(28px,4vw,64px); align-items: center; }
                .lc-revq-photo { position: relative; aspect-ratio: 3 / 4; }
                @media (max-width: 1000px){ .lc-revq-photo { display: none; } }
                .lc-revq-all { display: inline-flex; align-items: center; gap: 8px; margin-top: 22px; font-size: 9.5px; letter-spacing: 0.22em; color: var(--lc-accent); text-decoration: none; border-bottom: 1px solid rgba(66,89,105,.35); padding-bottom: 5px; transition: color .4s var(--lc-ease), border-color .4s var(--lc-ease); }
                .lc-revq-all:hover { color: var(--lc-ink); border-color: var(--lc-ink); }

                /* Rotating stage — fixed height so the layout never jumps between quotes */
                .lc-revq-stage { position: relative; min-height: clamp(240px, 22vw, 300px); }
                .lc-revq-quote {
                    position: absolute; top: 0; left: 0; right: 0; margin: 0;
                    opacity: 0; transform: translateY(12px); pointer-events: none;
                    transition: opacity .8s var(--lc-ease), transform .8s var(--lc-ease);
                }
                .lc-revq-quote.is-active { opacity: 1; transform: none; pointer-events: auto; }
                .lc-revq-featured { font-size: clamp(21px,2.7vw,36px); line-height: 1.34; color: var(--lc-ink); margin: 0; }
                .lc-revq-dots { position: absolute; left: 0; bottom: 0; display: flex; gap: 9px; }
                .lc-revq-dot {
                    width: 20px; height: 2px; border: none; padding: 0; cursor: pointer;
                    background: var(--lc-line); transition: background .4s var(--lc-ease), width .4s var(--lc-ease);
                }
                .lc-revq-dot.is-active { background: var(--lc-accent); width: 34px; }

                @media (max-width: 1000px){
                    .lc-revq-grid { grid-template-columns: 1fr; }
                    .lc-revq-stage { min-height: 300px; }
                }
                @media (prefers-reduced-motion: reduce){
                    .lc-revq-quote { transition: none; }
                }
            `}</style>
        </section>
    );
}
