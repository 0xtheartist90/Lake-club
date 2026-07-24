'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight, Phone } from 'lucide-react';

import { NAV_LINKS, PHONE, PHONE_HREF, RESERVE_URL } from './nav-links';

export default function LcNav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    // White over the hero image, ink once the page scrolls onto cream.
    const c = scrolled ? 'var(--lc-ink)' : '#fff';

    return (
        <>
            {/* Announcement bar — slim */}
            <div
                role='status'
                className='lc-announce fixed inset-x-0 top-0 z-[70] overflow-hidden text-center whitespace-nowrap text-white'
                style={{ height: 'var(--lc-bar-h)', lineHeight: 'var(--lc-bar-h)', background: 'var(--lc-accent)' }}>
                <span className='lc-announce-full'>Open to the public · Reservations welcome · No membership required</span>
                <span className='lc-announce-short'>Open to the public · No membership required</span>
            </div>

            {/* Nav */}
            <nav
                className='fixed inset-x-0 z-[60] flex items-center justify-between'
                style={{
                    top: 'var(--lc-bar-h)',
                    height: 'var(--lc-nav-h)',
                    padding: '0 clamp(20px, 3vw, 44px)',
                    background: scrolled ? 'rgba(201,212,218,0.92)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(14px)' : 'none',
                    borderBottom: scrolled ? '1px solid var(--lc-line)' : '1px solid transparent',
                    transition: 'background .5s var(--lc-ease), border-color .5s var(--lc-ease)'
                }}>
                <Link href='/' className='flex items-center gap-3' aria-label='Lake Club — home' style={{ textDecoration: 'none' }}>
                    <Image
                        src='/lakeclub_logo.png'
                        alt=''
                        width={277}
                        height={360}
                        priority
                        style={{
                            height: 30,
                            width: 'auto',
                            filter: scrolled ? 'none' : 'brightness(0) invert(1)',
                            transition: 'filter .4s var(--lc-ease)'
                        }}
                    />
                    <span
                        style={{
                            fontFamily: 'var(--font-body)',
                            fontWeight: 600,
                            fontSize: 14,
                            letterSpacing: '0.24em',
                            textTransform: 'uppercase',
                            color: c,
                            whiteSpace: 'nowrap',
                            transition: 'color .4s var(--lc-ease)'
                        }}>
                        LAKE&nbsp;CLUB
                    </span>
                </Link>

                {/* Desktop links — small caps, quiet */}
                <div className='lc-nav-desktop items-center' style={{ gap: 'clamp(18px, 2.2vw, 34px)' }}>
                    {NAV_LINKS.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className='lc-nav-link'
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: 10.5,
                                fontWeight: 500,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                color: c,
                                textDecoration: 'none',
                                transition: 'color .4s var(--lc-ease)'
                            }}>
                            {l.label}
                        </Link>
                    ))}
                </div>

                <div className='flex items-center' style={{ gap: 18 }}>
                    <a
                        href={PHONE_HREF}
                        className='lc-nav-phone'
                        style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: 11,
                            fontWeight: 500,
                            letterSpacing: '0.08em',
                            color: c,
                            textDecoration: 'none',
                            alignItems: 'center',
                            gap: 7,
                            transition: 'color .4s var(--lc-ease)'
                        }}>
                        <Phone size={12} strokeWidth={1.5} /> {PHONE}
                    </a>
                    <a
                        href={RESERVE_URL}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='lc-nav-cta lc-nav-reserve'
                        style={{ color: c, borderColor: scrolled ? 'var(--lc-ink)' : 'rgba(255,255,255,.6)' }}>
                        Reserve
                    </a>
                    <button
                        aria-label='Open menu'
                        aria-expanded={open}
                        onClick={() => setOpen(true)}
                        className='lc-nav-burger'
                        style={{
                            display: 'none',
                            width: 40,
                            height: 40,
                            border: 'none',
                            background: 'transparent',
                            color: c,
                            cursor: 'pointer',
                            padding: 0
                        }}>
                        <svg width='22' height='14' viewBox='0 0 22 14' fill='none' aria-hidden='true'>
                            <line x1='0' y1='1' x2='22' y2='1' stroke='currentColor' strokeWidth='1.4' />
                            <line x1='0' y1='7' x2='22' y2='7' stroke='currentColor' strokeWidth='1.4' />
                            <line x1='0' y1='13' x2='14' y2='13' stroke='currentColor' strokeWidth='1.4' />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile drawer */}
            <div
                aria-hidden='true'
                onClick={() => setOpen(false)}
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 99,
                    background: 'rgba(15,24,34,0.55)',
                    opacity: open ? 1 : 0,
                    pointerEvents: open ? 'auto' : 'none',
                    transition: 'opacity .45s var(--lc-ease)'
                }}
            />
            <aside
                role='dialog'
                aria-modal='true'
                aria-label='Site menu'
                style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    height: '100dvh',
                    width: '86vw',
                    maxWidth: 440,
                    zIndex: 100,
                    background: 'var(--lc-ivory)',
                    transform: open ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform .5s var(--lc-ease)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto'
                }}>
                <div
                    className='flex items-center justify-between'
                    style={{ padding: '18px 24px', borderBottom: '1px solid var(--lc-line)' }}>
                    <Image src='/lakeclub_logo.png' alt='Lake Club' width={277} height={360} style={{ height: 32, width: 'auto' }} />
                    <button
                        aria-label='Close menu'
                        onClick={() => setOpen(false)}
                        style={{ border: 'none', background: 'transparent', color: 'var(--lc-ink)', cursor: 'pointer', padding: 8 }}>
                        <svg width='18' height='18' viewBox='0 0 18 18' fill='none' aria-hidden='true'>
                            <line x1='1' y1='1' x2='17' y2='17' stroke='currentColor' strokeWidth='1.4' />
                            <line x1='17' y1='1' x2='1' y2='17' stroke='currentColor' strokeWidth='1.4' />
                        </svg>
                    </button>
                </div>
                <nav style={{ padding: '34px 28px', flex: 1 }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {NAV_LINKS.map((l, i) => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className='flex items-baseline'
                                    style={{ gap: 16, textDecoration: 'none', padding: '13px 0', borderBottom: '1px solid var(--lc-line)' }}>
                                    <span className='lc-mono' style={{ color: 'var(--lc-accent)', minWidth: 24, fontSize: 10 }}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className='lc-display' style={{ fontSize: 28, color: 'var(--lc-ink)' }}>
                                        {l.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div style={{ padding: '20px 28px 32px', borderTop: '1px solid var(--lc-line)', display: 'grid', gap: 14 }}>
                    <a
                        href={RESERVE_URL}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='lc-btn lc-btn--primary'
                        style={{ width: '100%' }}>
                        Reserve a table <ArrowRight size={14} strokeWidth={1.6} />
                    </a>
                    <a
                        href={PHONE_HREF}
                        className='lc-mono'
                        style={{ color: 'var(--lc-ink)', textDecoration: 'none', fontSize: 10.5, textAlign: 'center', letterSpacing: '0.2em' }}>
                        {PHONE}
                    </a>
                </div>
            </aside>

            {/* spacer only matters for non-hero pages; hero is full-bleed under nav */}
            <style>{`
                .lc-announce { font-family: var(--font-body); font-size: 9px; font-weight: 500; letter-spacing: 0.3em; text-transform: uppercase; }
                .lc-announce-short { display: none; }
                @media (max-width: 640px){
                    .lc-announce { font-size: 8px; letter-spacing: 0.16em; }
                    .lc-announce-full { display: none; }
                    .lc-announce-short { display: inline; }
                }
                .lc-nav-desktop { display: flex; }
                .lc-nav-phone { display: inline-flex; }
                .lc-nav-cta {
                    display: inline-flex; align-items: center; justify-content: center;
                    height: 34px; padding: 0 18px;
                    border: 1px solid; text-decoration: none;
                    font-family: var(--font-body); font-size: 9.5px; font-weight: 500;
                    letter-spacing: 0.26em; text-transform: uppercase;
                    transition: background .35s var(--lc-ease), color .35s var(--lc-ease), border-color .35s var(--lc-ease);
                }
                .lc-nav-cta:hover { background: var(--lc-accent); border-color: var(--lc-accent) !important; color: #fff !important; }
                @media (max-width: 1280px) { .lc-nav-phone { display: none !important; } }
                @media (max-width: 1000px) {
                    .lc-nav-desktop { display: none !important; }
                    .lc-nav-reserve { display: none !important; }
                    .lc-nav-burger { display: inline-flex !important; align-items: center; justify-content: center; }
                }
            `}</style>
        </>
    );
}
