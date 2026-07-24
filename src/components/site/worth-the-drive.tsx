import { ArrowRight, ArrowUpRight } from 'lucide-react';

import { RESERVE_URL } from './nav-links';
import Reveal from './reveal';

const STATS = [
    { n: '60', unit: 'min', label: 'From downtown Toronto' },
    { n: '1', unit: 'exit', label: 'Off Highway 400 north' },
    { n: '0', unit: '$', label: 'On-site parking, always free' }
];

/* Compact CTA band — slate accent, one viewport-light strip. */
export default function WorthTheDrive() {
    return (
        <section className='lc-wtd' aria-label='Worth the drive'>
            <div className='lc-wtd-in'>
                <Reveal>
                    <div className='lc-mono' style={{ color: 'rgba(255,255,255,.75)', letterSpacing: '0.3em', fontSize: 10 }}>
                        Worth the drive
                    </div>
                    <h2 className='lc-display lc-wtd-h'>
                        60 minutes from Toronto.{' '}
                        <span className='lc-italic' style={{ color: 'rgba(255,255,255,.75)' }}>A world from the city.</span>
                    </h2>
                </Reveal>

                <Reveal delay={80} className='lc-wtd-stats'>
                    {STATS.map((s) => (
                        <div key={s.label} className='lc-wtd-stat'>
                            <span className='lc-display lc-wtd-n'>
                                {s.n}
                                <span className='lc-italic lc-wtd-unit'>{s.unit}</span>
                            </span>
                            <span className='lc-mono lc-wtd-label'>{s.label}</span>
                        </div>
                    ))}
                </Reveal>

                <Reveal delay={140} className='lc-wtd-ctas'>
                    <a
                        href='https://maps.google.com/?q=330+Sunseeker+Avenue+Innisfil'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='lc-btn lc-btn--light'>
                        Get directions <ArrowUpRight size={14} strokeWidth={1.6} />
                    </a>
                    <a href={RESERVE_URL} target='_blank' rel='noopener noreferrer' className='lc-btn lc-btn--ghost-light'>
                        Reserve <ArrowRight size={14} strokeWidth={1.6} />
                    </a>
                </Reveal>
            </div>

            <style>{`
                .lc-wtd { background: var(--lc-accent); color: #fff; padding: clamp(48px,6vw,80px) clamp(20px,3vw,48px); }
                .lc-wtd-in {
                    max-width: 1360px; margin: 0 auto;
                    display: grid; grid-template-columns: 1.3fr auto auto;
                    gap: clamp(28px,4vw,64px); align-items: center;
                }
                .lc-wtd-h { font-size: clamp(24px,2.8vw,40px); line-height: 1.12; margin: 14px 0 0; color: #fff; max-width: 560px; }
                .lc-wtd-stats { display: flex; gap: clamp(24px,3vw,44px); }
                .lc-wtd-stat { display: flex; flex-direction: column; gap: 8px; border-left: 1px solid rgba(255,255,255,.25); padding-left: clamp(16px,2vw,26px); }
                .lc-wtd-n { font-size: clamp(28px,3vw,42px); color: #fff; line-height: 1; }
                .lc-wtd-unit { font-size: 15px; color: rgba(255,255,255,.75); margin-left: 4px; }
                .lc-wtd-label { font-size: 8.5px; letter-spacing: 0.18em; color: rgba(255,255,255,.65); max-width: 120px; }
                .lc-wtd-ctas { display: flex; flex-direction: column; gap: 10px; }
                .lc-wtd-ctas .lc-btn { height: 46px; padding: 0 24px; }
                @media (max-width: 1080px){
                    .lc-wtd-in { grid-template-columns: 1fr; gap: 28px; }
                    .lc-wtd-ctas { flex-direction: row; flex-wrap: wrap; }
                }
                @media (max-width: 560px){ .lc-wtd-stats { flex-direction: column; gap: 14px; } }
            `}</style>
        </section>
    );
}
