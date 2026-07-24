import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import ExperienceShowcase from './experience-showcase';
import FindYourVisit from './find-your-visit';
import GalleryMarquee from './gallery-marquee';
import HeroVideo from './hero-video';
import MenuExplorer from './menu-explorer';
import { PHONE, PHONE_HREF, RESERVE_URL } from './nav-links';
import Parallax from './parallax';
import PrivateDining from './private-dining';
import ReservationBar from './reservation-bar';
import Reveal from './reveal';
import Testimonials from './testimonials';
import WorthTheDrive from './worth-the-drive';

const photo = (n: number) => `/images/Lakeclub%20(${n}).jpg`;

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
                <HeroVideo sources={['/videos/lakeclub-hero-horizontal-v1.mp4']} />
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
                    <Reveal delay={300} className='lc-mono lc-hero-links'>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                            <span
                                aria-hidden='true'
                                style={{
                                    width: 15,
                                    height: 15,
                                    borderRadius: '50%',
                                    background: '#DA3743',
                                    display: 'grid',
                                    placeItems: 'center',
                                    flex: '0 0 auto'
                                }}>
                                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff' }} />
                            </span>
                            <span
                                style={{
                                    color: 'rgba(255,255,255,.85)',
                                    fontFamily: 'var(--font-body)',
                                    fontWeight: 600,
                                    fontSize: 11.5,
                                    letterSpacing: '0.01em',
                                    textTransform: 'none'
                                }}>
                                Powered by <span style={{ fontWeight: 700 }}>OpenTable</span>
                            </span>
                        </span>
                        <span aria-hidden='true' style={{ opacity: 0.35 }}>·</span>
                        <Link href='/menus' className='lc-hero-link'>View menus</Link>
                        <span aria-hidden='true' style={{ opacity: 0.35 }}>·</span>
                        <a href={PHONE_HREF} className='lc-hero-link'>Call {PHONE}</a>
                    </Reveal>
                </div>
                <div className='lc-scroll-hint lc-mono' aria-hidden='true'>
                    Scroll <span className='lc-scroll-arrow'>↓</span>
                </div>
            </section>

            {/* ===================== INTRO — image full-height left, statement right ===================== */}
            <section className='lc-intro'>
                <Reveal variant='image' className='lc-media lc-intro-media'>
                    <Parallax strength={44} scale={1.16}>
                        <Image
                            src='/images/interior-dining-wide.jpg'
                            alt='Inside The Lake Club — timber ceiling, long bar, and marina-facing windows'
                            fill
                            sizes='(max-width: 900px) 100vw, 48vw'
                            style={{ objectFit: 'cover', objectPosition: '38% center' }}
                        />
                    </Parallax>
                </Reveal>
                <div className='lc-intro-body'>
                    <Reveal className='lc-mono' style={{ color: 'var(--lc-accent)', letterSpacing: '0.32em', fontSize: 10 }}>
                        On the water at Friday Harbour
                    </Reveal>
                    <Reveal delay={90}>
                        <p className='lc-display lc-intro-tx'>
                            Set on the marina in Innisfil, The Lake Club serves unfussy, seasonal food and a genuine
                            welcome — from a long lunch on the patio to{' '}
                            <span className='lc-italic' style={{ color: 'var(--lc-accent)' }}>golden-hour cocktails</span>{' '}
                            as the boats come in.
                        </p>
                    </Reveal>
                    <Reveal delay={160}>
                        <Link href='/about' className='lc-btn lc-btn--ghost' style={{ height: 46, padding: '0 26px' }}>
                            Our story <ArrowRight size={14} strokeWidth={1.6} />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* ===================== FIND YOUR VISIT ===================== */}
            <FindYourVisit />

            {/* ===================== EXPERIENCE ===================== */}
            <ExperienceShowcase />

            {/* ===================== MENUS — one-viewport explorer ===================== */}
            <MenuExplorer />

            {/* ===================== GALLERY — auto-loop marquee ===================== */}
            <section style={{ background: 'var(--lc-cream)', padding: 'clamp(80px,10vw,150px) 0 0' }}>
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

                <GalleryMarquee />
            </section>

            {/* ===================== REVIEWS ===================== */}
            <Testimonials />

            {/* ===================== PRIVATE DINING + INQUIRY ===================== */}
            <PrivateDining />

            {/* ===================== WORTH THE DRIVE — CTA band ===================== */}
            <WorthTheDrive />

            {/* ===================== FULL-BLEED CLOSING BAND ===================== */}
            <section style={{ position: 'relative', minHeight: 'min(88vh, 840px)', display: 'flex', alignItems: 'center', overflow: 'hidden', color: '#fff' }}>
                <Parallax strength={80}>
                    <Image src={photo(18)} alt='A spread of dishes at The Lake Club' fill sizes='100vw' style={{ objectFit: 'cover', objectPosition: 'center' }} />
                </Parallax>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(15,24,34,.9) 0%, rgba(15,24,34,.58) 44%, rgba(15,24,34,.14) 100%)' }} />
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
                /* Intro — full-height image left, compact statement right */
                .lc-intro { display: grid; grid-template-columns: 0.95fr 1.05fr; background: var(--lc-cream); align-items: stretch; }
                .lc-intro-media { position: relative; min-height: clamp(340px, 42vw, 560px); }
                .lc-intro-body {
                    display: flex; flex-direction: column; justify-content: center; align-items: flex-start;
                    gap: clamp(20px, 2.4vw, 30px);
                    padding: clamp(48px,5.5vw,88px) clamp(24px,5vw,96px) clamp(48px,5.5vw,88px) clamp(24px,4vw,72px);
                }
                .lc-intro-tx { font-size: clamp(21px, 2.3vw, 34px); line-height: 1.38; color: var(--lc-ink); margin: 0; max-width: 560px; }
                @media (max-width: 900px){
                    .lc-intro { grid-template-columns: 1fr; }
                    .lc-intro-media { min-height: 0; aspect-ratio: 16 / 10; }
                }

                /* Hero extras */
                .lc-hero-links { margin-top: 16px; display: flex; align-items: center; flex-wrap: wrap; gap: 10px 16px; font-size: 9px; letter-spacing: 0.2em; }
                .lc-hero-link { color: rgba(255,255,255,.85); text-decoration: none; border-bottom: 1px solid rgba(255,255,255,.3); padding-bottom: 3px; transition: border-color .3s var(--lc-ease); }
                .lc-hero-link:hover { border-color: #fff; }
                .lc-scroll-hint {
                    position: absolute; bottom: 20px; right: clamp(20px,4vw,64px); z-index: 3;
                    color: rgba(255,255,255,.65); font-size: 9px; letter-spacing: 0.3em;
                    display: inline-flex; align-items: center; gap: 8px;
                }
                .lc-scroll-arrow { display: inline-block; animation: lc-bob 1.7s ease-in-out infinite; }
                @keyframes lc-bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(5px); } }
                @media (max-width: 900px){ .lc-scroll-hint { display: none; } }
                @media (prefers-reduced-motion: reduce){ .lc-scroll-arrow { animation: none; } }

            `}</style>
        </main>
    );
}
