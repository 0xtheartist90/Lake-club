import { ArrowRight } from 'lucide-react';

import { RESERVE_URL } from './nav-links';
import Reveal from './reveal';

const ITEMS = [
    { n: '01', label: 'A special occasion', href: RESERVE_URL, external: true },
    { n: '02', label: 'Weekend brunch', href: RESERVE_URL, external: true },
    { n: '03', label: 'An afternoon on the patio', href: '/patio' },
    { n: '04', label: 'A group or family', href: '/contact' },
    { n: '05', label: 'Private dining', href: '#private-dining' },
    { n: '06', label: 'Walk-ins & hours', href: '/contact' }
];

/* Slim wayfinding banner — text-only, hairline rows. */
export default function FindYourVisit() {
    return (
        <section className='lc-fyv' aria-label='Find your visit'>
            <div className='lc-fyv-in'>
                <Reveal className='lc-fyv-head'>
                    <span className='lc-mono' style={{ color: 'var(--lc-accent)', letterSpacing: '0.32em', fontSize: 10 }}>
                        Find your visit
                    </span>
                    <span className='lc-italic lc-fyv-title'>Tell us how you&rsquo;d like to dine.</span>
                </Reveal>

                <Reveal delay={100} className='lc-fyv-grid'>
                    {ITEMS.map((it) => (
                        <a
                            key={it.n}
                            href={it.href}
                            {...(it.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className='lc-fyv-item'>
                            <span className='lc-mono lc-fyv-n'>{it.n}</span>
                            <span className='lc-display lc-fyv-label'>{it.label}</span>
                            <ArrowRight size={15} strokeWidth={1.6} className='lc-fyv-arrow' />
                        </a>
                    ))}
                </Reveal>
            </div>

            <style>{`
                .lc-fyv { background: var(--lc-cream); border-top: 1px solid var(--lc-line); border-bottom: 1px solid var(--lc-line); padding: clamp(40px,5vw,64px) clamp(20px,3vw,48px); }
                .lc-fyv-in { max-width: 1360px; margin: 0 auto; display: grid; grid-template-columns: 0.9fr 2fr; gap: clamp(28px,4vw,72px); align-items: start; }
                .lc-fyv-head { display: flex; flex-direction: column; gap: 14px; }
                .lc-fyv-title { font-size: clamp(22px,2.4vw,32px); color: var(--lc-ink); line-height: 1.15; }
                .lc-fyv-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--lc-line); border-left: 1px solid var(--lc-line); }
                .lc-fyv-item {
                    display: flex; align-items: center; gap: 12px;
                    padding: 18px 18px; text-decoration: none;
                    border-bottom: 1px solid var(--lc-line); border-right: 1px solid var(--lc-line);
                    transition: background .35s var(--lc-ease);
                }
                .lc-fyv-item:hover { background: var(--lc-ivory); }
                .lc-fyv-n { font-size: 9px; letter-spacing: 0.18em; color: var(--lc-accent); flex: 0 0 auto; }
                .lc-fyv-label { flex: 1; font-size: clamp(15px,1.4vw,18px); color: var(--lc-ink); line-height: 1.15; }
                .lc-fyv-arrow { color: var(--lc-accent); flex: 0 0 auto; transition: transform .35s var(--lc-ease); }
                .lc-fyv-item:hover .lc-fyv-arrow { transform: translateX(4px); }
                @media (max-width: 1000px){ .lc-fyv-in { grid-template-columns: 1fr; } .lc-fyv-grid { grid-template-columns: repeat(2, 1fr); } }
                @media (max-width: 560px){ .lc-fyv-grid { grid-template-columns: 1fr; } }
            `}</style>
        </section>
    );
}
