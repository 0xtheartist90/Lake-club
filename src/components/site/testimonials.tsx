'use client';

import { useEffect, useState } from 'react';

import Reveal from './reveal';

const QUOTES = [
    {
        text: 'Dinner on the patio as the sun set over the marina — easily the best evening we’ve had all summer. The striploin alone is worth the drive from Toronto.',
        author: 'Alexandra M.',
        source: 'Google Review'
    },
    {
        text: 'Brunch with the boats coming in, great coffee, and the warmest team on Lake Simcoe. We come back every single weekend.',
        author: 'Daniel R.',
        source: 'OpenTable'
    },
    {
        text: 'We booked our anniversary dinner here and every detail felt considered — from the first cocktail to the last bite of cheesecake.',
        author: 'Priya S.',
        source: 'Google Review'
    }
];

export default function Testimonials() {
    const [i, setI] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setI((v) => (v + 1) % QUOTES.length), 6500);

        return () => clearInterval(id);
    }, []);

    return (
        <section className='lc-quotes' aria-label='What our guests say'>
            <Reveal className='lc-mono' style={{ color: 'var(--lc-accent)', letterSpacing: '0.32em', fontSize: 10 }}>
                From our guests
            </Reveal>

            <Reveal delay={80} className='lc-quotes-stage'>
                {QUOTES.map((q, idx) => (
                    <blockquote key={q.author} className={`lc-quote ${idx === i ? 'is-active' : ''}`} aria-hidden={idx !== i}>
                        <p className='lc-display lc-quote-tx'>
                            <span className='lc-italic' style={{ color: 'var(--lc-accent)' }}>&ldquo;</span>
                            {q.text}
                            <span className='lc-italic' style={{ color: 'var(--lc-accent)' }}>&rdquo;</span>
                        </p>
                        <footer className='lc-quote-by'>
                            <span className='lc-quote-author'>{q.author}</span>
                            <span aria-hidden='true' className='lc-quote-sep' />
                            <span className='lc-quote-src'>{q.source}</span>
                        </footer>
                    </blockquote>
                ))}
            </Reveal>

            <Reveal delay={140}>
                <div className='lc-quote-dots' role='tablist' aria-label='Testimonials'>
                    {QUOTES.map((q, idx) => (
                        <button
                            key={q.author}
                            role='tab'
                            aria-selected={idx === i}
                            aria-label={`Testimonial ${idx + 1}`}
                            onClick={() => setI(idx)}
                            className={`lc-quote-dot ${idx === i ? 'is-active' : ''}`}
                        />
                    ))}
                </div>
            </Reveal>

            <style>{`
                .lc-quotes {
                    background: var(--lc-cream);
                    border-top: 1px solid var(--lc-line);
                    padding: clamp(80px,11vw,160px) clamp(20px,5vw,72px);
                    text-align: center;
                    display: flex; flex-direction: column; align-items: center;
                }
                .lc-quotes-stage { position: relative; max-width: 940px; width: 100%; margin-top: clamp(28px,4vw,44px); min-height: clamp(220px, 26vw, 300px); }
                .lc-quote {
                    position: absolute; inset: 0; margin: 0;
                    display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
                    opacity: 0; transform: translateY(14px);
                    transition: opacity .9s var(--lc-ease), transform .9s var(--lc-ease);
                    pointer-events: none;
                }
                .lc-quote.is-active { opacity: 1; transform: none; pointer-events: auto; }
                .lc-quote-tx { font-size: clamp(21px,2.9vw,36px); line-height: 1.4; color: var(--lc-ink); margin: 0; }
                .lc-quote-by { display: flex; align-items: center; gap: 14px; margin-top: clamp(20px,3vw,30px); }
                .lc-quote-author { font-family: var(--font-body); font-size: 11px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--lc-ink); }
                .lc-quote-sep { width: 24px; height: 1px; background: var(--lc-accent); }
                .lc-quote-src { font-family: var(--font-body); font-size: 10px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--lc-ink-soft); }
                .lc-quote-dots { display: flex; gap: 10px; margin-top: clamp(20px,3vw,32px); }
                .lc-quote-dot {
                    width: 22px; height: 2px; border: none; padding: 0; cursor: pointer;
                    background: var(--lc-line); transition: background .4s var(--lc-ease), width .4s var(--lc-ease);
                }
                .lc-quote-dot.is-active { background: var(--lc-accent); width: 38px; }
                @media (max-width: 640px){
                    .lc-quotes-stage { min-height: 360px; }
                }
                @media (prefers-reduced-motion: reduce){
                    .lc-quote { transition: none; }
                }
            `}</style>
        </section>
    );
}
