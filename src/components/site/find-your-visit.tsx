import { ArrowUpRight, CalendarHeart, Clock, Sparkles, Sun, Users, UtensilsCrossed } from 'lucide-react';

import { RESERVE_URL } from './nav-links';
import Reveal from './reveal';

const ITEMS = [
    { icon: Sparkles, label: 'A special occasion', note: 'Anniversaries & birthdays', href: RESERVE_URL, external: true },
    { icon: CalendarHeart, label: 'Weekend brunch', note: 'Sat–Sun · on the water', href: RESERVE_URL, external: true },
    { icon: Sun, label: 'An afternoon on the patio', note: 'Seasonal, open air', href: '/patio' },
    { icon: Users, label: 'A group or family', note: 'Long tables welcome', href: '/contact' },
    { icon: UtensilsCrossed, label: 'Private dining', note: 'Up to 18, custom menu', href: '#private-dining' },
    { icon: Clock, label: 'Walk-ins & hours', note: 'When seating allows', href: '/contact' }
];

/* Wayfinding banner — icon tiles. */
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

                <Reveal className='lc-fyv-grid'>
                    {ITEMS.map((it) => (
                        <a
                            key={it.label}
                            href={it.href}
                            {...(it.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className='lc-fyv-item'>
                            <it.icon size={26} strokeWidth={1.1} className='lc-fyv-ic' />
                            <span className='lc-fyv-txt'>
                                <span className='lc-display lc-fyv-label'>{it.label}</span>
                                <span className='lc-mono lc-fyv-note'>{it.note}</span>
                            </span>
                            <ArrowUpRight size={17} strokeWidth={1.4} className='lc-fyv-arrow' />
                            <span className='lc-fyv-bar' aria-hidden='true' />
                        </a>
                    ))}
                </Reveal>
            </div>

            <style>{`
                .lc-fyv { position: relative; overflow: hidden; background: var(--lc-sand); padding: clamp(44px,5.5vw,72px) clamp(20px,3vw,48px); }
                /* palm-leaf pattern, softly tinted into the sand background */
                .lc-fyv::before {
                    content: '';
                    position: absolute; inset: 0; z-index: 0; pointer-events: none;
                    background-image: url(/backgroundpattern2.jpg);
                    background-repeat: repeat;
                    background-size: clamp(300px, 26vw, 420px) auto;
                    mix-blend-mode: multiply;
                    opacity: 0.05;
                }
                .lc-fyv-in { position: relative; z-index: 1; max-width: 1360px; margin: 0 auto; display: grid; grid-template-columns: 0.9fr 2fr; gap: clamp(28px,4vw,72px); align-items: start; }
                .lc-fyv-head { display: flex; flex-direction: column; gap: 14px; }
                .lc-fyv-title { font-size: clamp(22px,2.4vw,32px); color: var(--lc-ink); line-height: 1.15; }
                /* grid is only the scroll trigger — stays put, children cascade in */
                .lc-fyv-grid.lc-reveal { opacity: 1; transform: none; }
                .lc-fyv-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--lc-line); }
                .lc-fyv-item {
                    position: relative;
                    display: flex; align-items: center; gap: 18px;
                    padding: clamp(24px,2.6vw,34px) clamp(6px,1.4vw,22px); text-decoration: none;
                    border-bottom: 1px solid var(--lc-line);
                    opacity: 0; transform: translateY(18px);
                    transition: opacity .7s var(--lc-ease), transform .7s var(--lc-ease), background .3s var(--lc-ease);
                }
                .lc-fyv-grid.is-in .lc-fyv-item { opacity: 1; transform: none; }
                .lc-fyv-grid.is-in .lc-fyv-item:nth-child(1){ transition-delay: .04s,.04s,0s }
                .lc-fyv-grid.is-in .lc-fyv-item:nth-child(2){ transition-delay: .10s,.10s,0s }
                .lc-fyv-grid.is-in .lc-fyv-item:nth-child(3){ transition-delay: .16s,.16s,0s }
                .lc-fyv-grid.is-in .lc-fyv-item:nth-child(4){ transition-delay: .22s,.22s,0s }
                .lc-fyv-grid.is-in .lc-fyv-item:nth-child(5){ transition-delay: .28s,.28s,0s }
                .lc-fyv-grid.is-in .lc-fyv-item:nth-child(6){ transition-delay: .34s,.34s,0s }
                @media (prefers-reduced-motion: reduce){
                    .lc-fyv-item { opacity: 1; transform: none; transition: background .3s var(--lc-ease); }
                }
                /* column dividers only between items, not outer edges */
                .lc-fyv-item:not(:nth-child(3n)) { border-right: 1px solid var(--lc-line); }
                .lc-fyv-ic {
                    flex: 0 0 auto; color: var(--lc-accent);
                    transition: transform .5s var(--lc-ease), color .35s var(--lc-ease);
                }
                /* transform-only hover slide — no reflow, so the layout never shifts */
                .lc-fyv-item:hover .lc-fyv-ic { transform: translateX(6px) scale(1.08) rotate(-3deg); }
                .lc-fyv-txt { flex: 1; display: flex; flex-direction: column; gap: 5px; min-width: 0; transition: transform .4s var(--lc-ease); }
                .lc-fyv-item:hover .lc-fyv-txt { transform: translateX(6px); }
                .lc-fyv-label { font-size: clamp(17px,1.55vw,21px); color: var(--lc-ink); line-height: 1.12; letter-spacing: -0.01em; }
                .lc-fyv-note { font-size: 9px; letter-spacing: 0.16em; color: var(--lc-ink-faint); }
                .lc-fyv-arrow { color: var(--lc-ink-faint); flex: 0 0 auto; transition: transform .4s var(--lc-ease), color .35s var(--lc-ease); }
                .lc-fyv-item:hover .lc-fyv-arrow { transform: translate(3px,-3px); color: var(--lc-accent); }
                /* accent bar grows from the left on hover */
                .lc-fyv-bar { position: absolute; left: 0; bottom: -1px; height: 2px; width: 0; background: var(--lc-accent); transition: width .45s var(--lc-ease); }
                .lc-fyv-item:hover .lc-fyv-bar { width: 100%; }
                @media (max-width: 1000px){
                    .lc-fyv-in { grid-template-columns: 1fr; }
                    .lc-fyv-grid { grid-template-columns: repeat(2, 1fr); }
                    .lc-fyv-item:not(:nth-child(3n)) { border-right: none; }
                    .lc-fyv-item:nth-child(odd) { border-right: 1px solid var(--lc-line); }
                }
                @media (max-width: 560px){
                    .lc-fyv-grid { grid-template-columns: 1fr; }
                    .lc-fyv-item:nth-child(odd) { border-right: none; }
                }
            `}</style>
        </section>
    );
}
