'use client';

import { useState } from 'react';

import Image from 'next/image';

import { ArrowRight, Clock, Navigation, Users, UtensilsCrossed } from 'lucide-react';

import Parallax from './parallax';
import Reveal from './reveal';

const photo = (n: number) => `/images/Lakeclub%20(${n}).jpg`;

const FEATURES = [
    { icon: Users, label: 'Up to 18 seated' },
    { icon: UtensilsCrossed, label: 'Custom menu with chef' },
    { icon: Navigation, label: 'Marina-facing room' },
    { icon: Clock, label: 'Lunch or dinner' }
];

export default function PrivateDining() {
    const [done, setDone] = useState(false);

    return (
        <section id='private-dining' className='lc-pd' aria-label='Private dining'>
            <div className='lc-pd-in'>
                {/* Left — image with caption */}
                <Reveal variant='image' className='lc-media lc-frame lc-pd-photo'>
                    <Parallax strength={44} scale={1.16}>
                        <Image src={photo(5)} alt='Guests toasting in the private dining room at The Lake Club' fill sizes='(max-width: 940px) 100vw, 44vw' style={{ objectFit: 'cover' }} />
                    </Parallax>
                    <div className='lc-pd-photo-scrim' />
                    <div className='lc-pd-photo-cap'>
                        <span className='lc-mono' style={{ fontSize: 9.5, letterSpacing: '0.24em', color: 'var(--lc-accent-on-dark)' }}>
                            The private room
                        </span>
                        <span className='lc-display' style={{ fontSize: 22, color: '#fff', marginTop: 5 }}>Yours for the evening</span>
                    </div>
                </Reveal>

                {/* Right — copy + compact form */}
                <div className='lc-pd-body'>
                    <Reveal className='lc-mono' style={{ color: 'var(--lc-accent)', letterSpacing: '0.32em', fontSize: 10 }}>
                        Private dining
                    </Reveal>
                    <Reveal delay={60}>
                        <h2 className='lc-display' style={{ fontSize: 'clamp(28px,3.4vw,44px)', color: 'var(--lc-ink)', margin: '14px 0 0', lineHeight: 1.05 }}>
                            An intimate room,{' '}
                            <span className='lc-italic' style={{ color: 'var(--lc-accent)' }}>up to 18.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={110}>
                        <p className='lc-body' style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--lc-ink-soft)', maxWidth: 480, margin: '16px 0 0' }}>
                            Birthdays, anniversaries, executive dinners. Custom menu, dedicated service, the same view.
                        </p>
                    </Reveal>

                    <Reveal delay={150} className='lc-pd-feats'>
                        {FEATURES.map((f) => (
                            <span key={f.label} className='lc-pd-feat'>
                                <f.icon size={13} strokeWidth={1.5} style={{ color: 'var(--lc-accent)' }} />
                                <span className='lc-body' style={{ fontSize: 12, fontWeight: 500, color: 'var(--lc-ink)' }}>{f.label}</span>
                            </span>
                        ))}
                    </Reveal>

                    <Reveal delay={190}>
                        {done ? (
                            <p className='lc-body' style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--lc-ink)', margin: '28px 0 0' }}>
                                Thank you — your inquiry is on its way. We&rsquo;ll be in touch within 24 hours.
                            </p>
                        ) : (
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    setDone(true);
                                }}
                                className='lc-pd-form'>
                                <div className='lc-pd-row'>
                                    <input className='lc-field' type='text' placeholder='Full name' aria-label='Full name' required />
                                    <input className='lc-field' type='email' placeholder='Email' aria-label='Email' required />
                                </div>
                                <div className='lc-pd-row'>
                                    <input className='lc-field' type='tel' placeholder='Phone' aria-label='Phone' required />
                                    <input className='lc-field' type='text' placeholder='Preferred date' aria-label='Preferred date' onFocus={(e) => (e.target.type = 'date')} required />
                                </div>
                                <div className='lc-pd-row'>
                                    <input className='lc-field' type='number' min={2} max={18} placeholder='Guest count' aria-label='Guest count' required />
                                    <select className='lc-field' aria-label='Occasion' defaultValue=''>
                                        <option value='' disabled>
                                            Occasion
                                        </option>
                                        <option>Birthday</option>
                                        <option>Anniversary</option>
                                        <option>Engagement</option>
                                        <option>Corporate dinner</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className='lc-pd-foot'>
                                    <button type='submit' className='lc-btn lc-btn--dark' style={{ height: 48 }}>
                                        Send inquiry <ArrowRight size={14} strokeWidth={1.6} />
                                    </button>
                                    <span className='lc-mono' style={{ fontSize: 8.5, letterSpacing: '0.2em', color: 'var(--lc-ink-faint)' }}>
                                        We&rsquo;ll be in touch within 24 hours
                                    </span>
                                </div>
                            </form>
                        )}
                    </Reveal>
                </div>
            </div>

            <style>{`
                .lc-pd { background: var(--lc-ivory); }
                .lc-pd-in { display: grid; grid-template-columns: 0.92fr 1.08fr; align-items: stretch; min-height: min(88vh, 900px); }
                .lc-pd-photo { position: relative; align-self: stretch; }
                .lc-pd-photo-scrim { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 55%, rgba(15,24,34,.72)); }
                .lc-pd-photo-cap { position: absolute; left: clamp(24px,2.5vw,40px); bottom: clamp(22px,2.5vw,36px); z-index: 3; display: flex; flex-direction: column; }
                .lc-pd-body { display: flex; flex-direction: column; justify-content: center; padding: clamp(48px,5vw,88px) clamp(24px,5vw,84px); }
                .lc-pd-body .lc-pd-form { max-width: 560px; }
                .lc-pd-feats { display: flex; flex-wrap: wrap; gap: 8px 22px; margin-top: 20px; padding: 14px 0; border-top: 1px solid var(--lc-line); border-bottom: 1px solid var(--lc-line); }
                .lc-pd-feat { display: inline-flex; align-items: center; gap: 8px; }
                .lc-pd-form { display: grid; gap: 14px; margin-top: 24px; }
                .lc-pd-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
                .lc-pd-form .lc-field { height: 44px; font-size: 13.5px; }
                .lc-pd-foot { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; margin-top: 8px; }
                select.lc-field {
                    appearance: none; -webkit-appearance: none; cursor: pointer;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='%23425969' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
                    background-repeat: no-repeat; background-position: right 2px center;
                }
                @media (max-width: 940px){
                    .lc-pd-in { grid-template-columns: 1fr; min-height: 0; }
                    .lc-pd-photo { aspect-ratio: 16 / 10; }
                    .lc-pd-body { padding: clamp(32px,7vw,48px) clamp(20px,5vw,32px); }
                    .lc-pd-row { grid-template-columns: 1fr; }
                }
            `}</style>
        </section>
    );
}
