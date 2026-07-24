import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import ExperienceShowcase from './experience-showcase';
import MenuExplorer from './menu-explorer';
import { RESERVE_URL } from './nav-links';
import ReservationBar from './reservation-bar';
import Reveal from './reveal';
import Testimonials from './testimonials';

const photo = (n: number) => `/images/Lakeclub%20(${n}).jpg`;

const MARQUEE = [2, 3, 4, 6, 7, 8, 12, 15, 18, 19];

export default function LcHome() {
    return (
        <main id='main'>
            {/* ===================== HERO ===================== */}
            <section
                style={{
                    position: 'relative',
                    minHeight: 'min(100vh, 1000px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    overflow: 'hidden',
                    color: '#fff'
                }}>
                <Image
                    src={photo(30)}
                    alt='Waterfront dining on the marina at The Lake Club'
                    fill
                    priority
                    sizes='100vw'
                    style={{ objectFit: 'cover', objectPosition: 'center 38%' }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'linear-gradient(180deg, rgba(15,24,34,.52) 0%, rgba(15,24,34,.12) 30%, rgba(15,24,34,.34) 60%, rgba(15,24,34,.9) 100%)'
                    }}
                />
                <div style={{ position: 'relative', zIndex: 2, padding: '0 clamp(20px,4vw,64px) clamp(28px,4.5vh,52px)', width: '100%' }}>
                    <Reveal>
                        <Image
                            src='/lakeclub_logo.png'
                            alt=''
                            width={277}
                            height={360}
                            priority
                            style={{ height: 'clamp(52px, 6.5vw, 88px)', width: 'auto', filter: 'brightness(0) invert(1)' }}
                        />
                    </Reveal>
                    <Reveal delay={70} className='lc-mono' style={{ color: 'rgba(255,255,255,.8)', letterSpacing: '0.36em', display: 'flex', flexWrap: 'wrap', gap: '8px 18px', fontSize: 10, marginTop: 26 }}>
                        <span>Waterfront Dining</span>
                        <span style={{ opacity: 0.45 }}>—</span>
                        <span>Innisfil, Lake Simcoe</span>
                        <span style={{ opacity: 0.45 }}>—</span>
                        <span>Friday Harbour</span>
                    </Reveal>
                    <Reveal delay={120}>
                        <h1
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontWeight: 700,
                                fontSize: 'clamp(56px, 14vw, 230px)',
                                lineHeight: 0.88,
                                margin: '12px 0 0',
                                color: '#fff',
                                letterSpacing: '-0.035em'
                            }}>
                            LAKE&nbsp;CLUB
                        </h1>
                    </Reveal>
                    <Reveal delay={180} style={{ maxWidth: 480, marginTop: 20 }}>
                        <p className='lc-body' style={{ fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,.88)', margin: 0 }}>
                            A marina-facing kitchen where brunch runs to dinner and every table looks out over the water.
                        </p>
                    </Reveal>
                    <Reveal delay={240} style={{ marginTop: 26 }}>
                        <ReservationBar variant='dark' />
                    </Reveal>
                </div>
            </section>

            {/* ===================== INTRO STATEMENT ===================== */}
            <section style={{ background: 'var(--lc-cream)', padding: 'clamp(88px,12vw,180px) clamp(20px,5vw,72px)' }}>
                <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
                    <Reveal
                        className='lc-media lc-zoom lc-frame'
                        style={{
                            position: 'relative',
                            width: 'min(440px, 82vw)',
                            aspectRatio: '4 / 3',
                            margin: '0 auto clamp(36px,5vw,60px)'
                        }}>
                        <Image
                            src='/exterior-lake-club-sign-wood-facade-ss6499.jpg'
                            alt='The Lake Club entrance at Friday Harbour'
                            fill
                            sizes='(max-width: 640px) 82vw, 440px'
                            style={{ objectFit: 'cover' }}
                        />
                    </Reveal>
                    <Reveal className='lc-mono' style={{ color: 'var(--lc-accent)', letterSpacing: '0.32em', fontSize: 10 }}>
                        On the water at Friday Harbour
                    </Reveal>
                    <Reveal delay={100}>
                        <p className='lc-display' style={{ fontSize: 'clamp(26px, 3.4vw, 46px)', lineHeight: 1.32, color: 'var(--lc-ink)', margin: '30px 0 0' }}>
                            Set on the marina in Innisfil, The Lake Club serves unfussy, seasonal food and a genuine
                            welcome — from a long lunch on the patio to{' '}
                            <span className='lc-italic' style={{ color: 'var(--lc-accent)' }}>golden-hour cocktails</span> as
                            the boats come in.
                        </p>
                    </Reveal>
                    <Reveal delay={180} style={{ marginTop: 44 }}>
                        <Link href='/about' className='lc-btn lc-btn--ghost'>
                            Our story <ArrowRight size={14} strokeWidth={1.6} />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* ===================== EXPERIENCE ===================== */}
            <ExperienceShowcase />

            {/* ===================== MENUS — one-viewport explorer ===================== */}
            <MenuExplorer />

            {/* ===================== GALLERY — auto-loop marquee ===================== */}
            <section style={{ background: 'var(--lc-cream)', borderTop: '1px solid var(--lc-line)', padding: 'clamp(80px,10vw,150px) 0 0' }}>
                <div style={{ padding: '0 clamp(20px,3vw,48px)', marginBottom: 'clamp(30px,4vw,48px)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
                        <div>
                            <Reveal className='lc-mono' style={{ color: 'var(--lc-accent)', letterSpacing: '0.32em', fontSize: 10 }}>
                                The gallery
                            </Reveal>
                            <Reveal delay={60}>
                                <h2 className='lc-display' style={{ fontSize: 'clamp(34px,4.6vw,60px)', color: 'var(--lc-ink)', margin: '16px 0 0', lineHeight: 1.02 }}>
                                    A day on the marina
                                </h2>
                            </Reveal>
                        </div>
                        <Reveal delay={120}>
                            <Link href='/gallery' className='lc-btn lc-btn--ghost'>
                                View gallery <ArrowRight size={14} strokeWidth={1.6} />
                            </Link>
                        </Reveal>
                    </div>
                </div>

                <div className='lc-marquee' aria-label='Photos from The Lake Club'>
                    <div className='lc-marquee-track'>
                        {[...MARQUEE, ...MARQUEE].map((n, i) => (
                            <div key={`${n}-${i}`} className='lc-mq-item lc-media' aria-hidden={i >= MARQUEE.length}>
                                <Image src={photo(n)} alt='' fill sizes='(max-width: 700px) 60vw, 26vw' style={{ objectFit: 'cover' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===================== TESTIMONIALS ===================== */}
            <Testimonials />

            {/* ===================== FULL-BLEED CLOSING BAND ===================== */}
            <section style={{ position: 'relative', minHeight: 'min(88vh, 840px)', display: 'flex', alignItems: 'center', overflow: 'hidden', color: '#fff' }}>
                <Image src={photo(10)} alt='Guests at The Lake Club' fill sizes='100vw' style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(15,24,34,.86) 0%, rgba(15,24,34,.5) 46%, rgba(15,24,34,.14) 100%)' }} />
                <div style={{ position: 'relative', zIndex: 1, padding: '0 clamp(20px,6vw,96px)', maxWidth: 860 }}>
                    <Reveal className='lc-mono' style={{ color: 'var(--lc-accent-on-dark)', letterSpacing: '0.32em', fontSize: 10 }}>
                        Why we&rsquo;re here
                    </Reveal>
                    <Reveal delay={80}>
                        <h2 className='lc-display' style={{ fontSize: 'clamp(34px,4.8vw,66px)', color: '#fff', margin: '20px 0 0', lineHeight: 1.08 }}>
                            Great food, good drinks, and a{' '}
                            <span className='lc-italic' style={{ color: 'var(--lc-accent-on-dark)' }}>warm welcome on the water.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={160} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 38 }}>
                        <a href={RESERVE_URL} target='_blank' rel='noopener noreferrer' className='lc-btn lc-btn--light'>
                            Reserve a table <ArrowRight size={14} strokeWidth={1.6} />
                        </a>
                        <Link href='/private-dining' className='lc-btn lc-btn--ghost-light'>
                            Private dining
                        </Link>
                    </Reveal>
                </div>
            </section>

            <style>{`
                /* Marquee — continuous auto-loop */
                .lc-marquee { overflow: hidden; width: 100%; }
                .lc-marquee-track { display: flex; width: max-content; animation: lc-mq 64s linear infinite; }
                .lc-marquee:hover .lc-marquee-track { animation-play-state: paused; }
                .lc-mq-item { position: relative; flex: 0 0 clamp(240px, 26vw, 400px); aspect-ratio: 3 / 4; margin-right: 3px; }
                @keyframes lc-mq { to { transform: translateX(-50%); } }
                @media (prefers-reduced-motion: reduce){
                    .lc-marquee-track { animation: none; }
                    .lc-marquee { overflow-x: auto; }
                }
            `}</style>
        </main>
    );
}
