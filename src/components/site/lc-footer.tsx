import Image from 'next/image';
import Link from 'next/link';

import { CalendarCheck, Clock, Facebook, Instagram, MapPin } from 'lucide-react';

import { NAV_LINKS, PHONE, PHONE_HREF } from './nav-links';
import NewsletterForm from './newsletter-form';
import Reveal from './reveal';

const INFO = [
    { label: 'Hours', icon: Clock, lines: ['Mon–Fri · 11am – 9pm', 'Sat–Sun · 10am – 9pm'] },
    { label: 'Find us', icon: MapPin, lines: ['330 Sunseeker Avenue', 'Innisfil · Lake Simcoe'] },
    { label: 'Reservations', icon: CalendarCheck, lines: [PHONE, 'Open to the public'] }
];

export default function LcFooter() {
    return (
        <footer style={{ background: 'var(--lc-ivory)', color: 'var(--lc-ink)' }}>
            {/* KEEP IN TOUCH */}
            <div className='lc-keep'>
                <Reveal variant='image' className='lc-keep-media lc-media lc-frame'>
                    <Image
                        src='/images/Lakeclub%20(24).jpg'
                        alt='The dining room at The Lake Club'
                        fill
                        sizes='(max-width: 900px) 100vw, 40vw'
                        style={{ objectFit: 'cover' }}
                    />
                </Reveal>
                <div className='lc-keep-body'>
                    <div className='lc-mono' style={{ color: 'var(--lc-accent)', letterSpacing: '0.3em' }}>
                        Newsletter
                    </div>
                    <h2 className='lc-display' style={{ fontSize: 'clamp(34px,4.4vw,56px)', color: 'var(--lc-ink)', margin: '16px 0 0', lineHeight: 1 }}>
                        Keep in touch
                    </h2>
                    <p className='lc-body' style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--lc-ink-soft)', margin: '18px 0 32px', maxWidth: 420 }}>
                        Sign up for seasonal menus, patio openings and events on the marina. No spam — just the good
                        stuff.
                    </p>
                    <NewsletterForm />
                </div>
            </div>

            <style>{`
                .lc-keep {
                    max-width: 1320px; margin: 0 auto;
                    padding: clamp(56px,7vw,104px) clamp(20px,5vw,72px);
                    display: grid; grid-template-columns: 0.9fr 1.1fr;
                    gap: clamp(32px,5vw,80px); align-items: center;
                }
                .lc-keep-media { position: relative; aspect-ratio: 3 / 2; }
                /* palm-leaf pattern faintly blended behind the brand lockup */
                .lc-brand { position: relative; overflow: hidden; }
                .lc-brand::before {
                    content: ''; position: absolute; inset: 0; z-index: 0; pointer-events: none;
                    background-image: url(/backgroundpattern2.jpg);
                    background-repeat: repeat;
                    background-size: clamp(300px, 26vw, 420px) auto;
                    mix-blend-mode: multiply;
                    opacity: 0.05;
                }
                .lc-brand > * { position: relative; z-index: 1; }
                .lc-keep-body { display: flex; flex-direction: column; justify-content: center; }
                @media (max-width: 900px){
                    .lc-keep { grid-template-columns: 1fr; }
                    .lc-keep-media { aspect-ratio: 3 / 2; }
                }
            `}</style>

            {/* INFO STRIP */}
            <div style={{ borderTop: '1px solid var(--lc-line)', borderBottom: '1px solid var(--lc-line)' }}>
                <div className='lc-info' style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                    {INFO.map((c, i) => (
                        <div
                            key={c.label}
                            style={{
                                padding: 'clamp(28px,3.4vw,44px) clamp(20px,4vw,52px)',
                                borderLeft: i === 0 ? 'none' : '1px solid var(--lc-line)'
                            }}>
                            <div className='lc-mono' style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'var(--lc-accent)', letterSpacing: '0.24em', marginBottom: 14 }}>
                                <c.icon size={15} strokeWidth={1.5} />
                                {c.label}
                            </div>
                            {c.lines.map((l) => (
                                <div key={l} className='lc-body' style={{ fontSize: 15, color: 'var(--lc-ink)', lineHeight: 1.7 }}>
                                    {l}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* CENTERED BRAND LOCKUP */}
            <div className='lc-brand' style={{ padding: 'clamp(64px,8vw,110px) clamp(20px,5vw,72px)', textAlign: 'center' }}>
                <Image
                    src='/lakeclub_logo.png'
                    alt='Lake Club'
                    width={277}
                    height={360}
                    style={{ height: 72, width: 'auto', margin: '0 auto', display: 'block' }}
                />
                <div className='lc-display' style={{ fontSize: 22, letterSpacing: '0.24em', color: 'var(--lc-ink)', marginTop: 22 }}>
                    LAKE CLUB
                </div>
                <div className='lc-italic' style={{ fontSize: 15, color: 'var(--lc-ink-soft)', marginTop: 4 }}>
                    at Friday Harbour
                </div>

                <nav
                    className='lc-foot-nav'
                    style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px 30px', marginTop: 36 }}>
                    {NAV_LINKS.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className='lc-nav-link lc-mono'
                            style={{ color: 'var(--lc-ink)', textDecoration: 'none', letterSpacing: '0.16em' }}>
                            {l.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* BOTTOM BAR */}
            <div style={{ borderTop: '1px solid var(--lc-line)' }}>
                <div
                    className='lc-foot-bottom'
                    style={{
                        maxWidth: 1320,
                        margin: '0 auto',
                        padding: '24px clamp(20px,5vw,72px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 16
                    }}>
                    <span className='lc-mono' style={{ color: 'var(--lc-ink-faint)', letterSpacing: '0.14em', fontSize: 10.5 }}>
                        © 2026 The Lake Club at Friday Harbour Resort
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                        <a href={PHONE_HREF} className='lc-mono' style={{ color: 'var(--lc-ink-faint)', textDecoration: 'none', letterSpacing: '0.14em', fontSize: 10.5 }}>
                            {PHONE}
                        </a>
                        <span style={{ display: 'flex', gap: 14 }}>
                            <a href='#' aria-label='Instagram' style={{ color: 'var(--lc-ink)' }}>
                                <Instagram size={17} strokeWidth={1.5} />
                            </a>
                            <a href='#' aria-label='Facebook' style={{ color: 'var(--lc-ink)' }}>
                                <Facebook size={17} strokeWidth={1.5} />
                            </a>
                        </span>
                    </div>
                    <span className='lc-mono' style={{ color: 'var(--lc-ink-faint)', letterSpacing: '0.14em', fontSize: 10.5 }}>
                        Privacy · Accessibility · Terms
                    </span>
                </div>
            </div>

            <style>{`
                @media (max-width: 820px){
                    .lc-keep { grid-template-columns: 1fr !important; }
                    .lc-info { grid-template-columns: 1fr !important; }
                    .lc-info > div { border-left: none !important; border-top: 1px solid var(--lc-line); }
                    .lc-info > div:first-child { border-top: none; }
                    .lc-foot-bottom { justify-content: center; text-align: center; }
                }
            `}</style>
        </footer>
    );
}
