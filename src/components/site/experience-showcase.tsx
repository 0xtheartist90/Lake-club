'use client';

import { useState } from 'react';

import Image from 'next/image';

import Parallax from './parallax';
import Reveal from './reveal';

const photo = (n: number) => `/images/Lakeclub%20(${n}).jpg`;

const SHOTS = [
    { n: 1, alt: 'Old fashioned at the bar' },
    { n: 8, alt: 'Dinner, plated' },
    { n: 31, alt: 'The marina-facing dining room' },
    { n: 36, alt: 'Weekend brunch bowls' },
    { n: 35, alt: 'Cocktails at golden hour on the patio' },
    { n: 3, alt: 'A spread on the terrace' }
];

const ON_THE_MENU = ['Share Plates', 'Appetizers', 'Handhelds', 'Entrées'];

export default function ExperienceShowcase() {
    const [active, setActive] = useState(0);

    return (
        <section className='lc-exp'>
            {/* Main image — bleeds to the right edge, crossfades on thumbnail select */}
            <div className='lc-exp-media'>
                <Parallax strength={60} scale={1.16}>
                    {SHOTS.map((s, i) => (
                        <Image
                            key={s.n}
                            src={photo(s.n)}
                            alt={i === active ? s.alt : ''}
                            aria-hidden={i !== active}
                            fill
                            sizes='(max-width: 900px) 100vw, 55vw'
                            style={{
                                objectFit: 'cover',
                                opacity: i === active ? 1 : 0,
                                transition: 'opacity 1.1s var(--lc-ease)'
                            }}
                        />
                    ))}
                </Parallax>
                <div className='lc-exp-scrim' aria-hidden='true' />
            </div>

            <div className='lc-exp-content'>
                <div>
                    <Reveal className='lc-mono' style={{ color: 'var(--lc-accent-on-dark)', letterSpacing: '0.3em', fontSize: 10 }}>
                        The experience
                    </Reveal>
                    <Reveal delay={80}>
                        <h2 className='lc-display lc-exp-h'>
                            Discover signature cocktails, a seasonal kitchen, and sunsets over the marina.
                        </h2>
                    </Reveal>
                    <Reveal delay={140}>
                        <p className='lc-exp-note lc-body'>
                            * Menus change with the season. Ask your server
                            <br />
                            for tonight&rsquo;s features from the pass.
                        </p>
                    </Reveal>
                </div>

                <div className='lc-exp-bottom'>
                    <Reveal delay={100}>
                        <div className='lc-exp-listhead lc-body'>On the menu</div>
                        <ul className='lc-exp-list lc-body'>
                            {ON_THE_MENU.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </Reveal>

                    <Reveal delay={160}>
                        <div className='lc-exp-thumbs' role='tablist' aria-label='Experience photos'>
                            {SHOTS.map((s, i) => (
                                <button
                                    key={s.n}
                                    role='tab'
                                    aria-selected={i === active}
                                    aria-label={s.alt}
                                    onClick={() => setActive(i)}
                                    className={`lc-exp-thumb ${i === active ? 'is-active' : ''}`}>
                                    <Image src={photo(s.n)} alt='' fill sizes='110px' style={{ objectFit: 'cover' }} />
                                </button>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>

            <style>{`
                .lc-exp {
                    position: relative;
                    background: var(--lc-dark-2);
                    color: #fff;
                    min-height: min(96vh, 940px);
                    overflow: hidden;
                    display: flex;
                }
                .lc-exp-media { position: absolute; top: 0; right: 0; width: 58%; height: 100%; overflow: hidden; }
                .lc-exp-scrim { position: absolute; inset: 0; background: linear-gradient(90deg, var(--lc-dark-2) 0%, rgba(14,24,34,.4) 34%, transparent 62%); }
                .lc-exp-content {
                    position: relative; z-index: 2;
                    width: 100%;
                    padding: clamp(56px,7vw,104px) clamp(20px,3vw,48px) clamp(40px,5vw,64px);
                    display: flex; flex-direction: column; justify-content: space-between;
                    gap: clamp(48px,7vw,96px);
                }
                .lc-exp-h {
                    font-size: clamp(30px,3.6vw,54px);
                    color: #fff;
                    margin: 22px 0 0;
                    line-height: 1.12;
                    max-width: 560px;
                    letter-spacing: 0;
                }
                .lc-exp-note { font-size: 10.5px; line-height: 1.7; color: rgba(255,255,255,.42); margin: 26px 0 0; letter-spacing: 0.02em; }
                .lc-exp-bottom { display: flex; flex-direction: column; gap: 28px; }
                .lc-exp-listhead { font-size: 12px; font-weight: 600; color: #fff; margin-bottom: 10px; }
                .lc-exp-list { list-style: none; padding: 0; margin: 0; columns: 2; column-gap: 40px; max-width: 300px; }
                .lc-exp-list li { font-size: 11.5px; color: rgba(255,255,255,.55); line-height: 2; break-inside: avoid; }
                .lc-exp-list li::before { content: '•'; color: var(--lc-accent-on-dark); margin-right: 9px; }
                .lc-exp-thumbs { display: flex; gap: 10px; flex-wrap: wrap; }
                .lc-exp-thumb {
                    position: relative;
                    width: clamp(64px, 6.4vw, 104px);
                    aspect-ratio: 4 / 5;
                    flex: 0 0 auto;
                    padding: 0; border: none; background: none; cursor: pointer;
                    overflow: hidden;
                    opacity: .55;
                    transition: opacity .4s var(--lc-ease);
                }
                .lc-exp-thumb:hover { opacity: .85; }
                .lc-exp-thumb.is-active { opacity: 1; outline: 1px solid #fff; outline-offset: 3px; }
                @media (max-width: 900px){
                    .lc-exp { display: block; min-height: 0; }
                    .lc-exp-media { position: relative; width: 100%; height: 62vw; max-height: 440px; }
                    .lc-exp-scrim { background: linear-gradient(0deg, var(--lc-dark-2) 0%, transparent 45%); }
                    .lc-exp-content { gap: 44px; padding-top: 36px; }
                }
                @media (prefers-reduced-motion: reduce){
                    .lc-exp-media img { transition: none !important; }
                }
            `}</style>
        </section>
    );
}
