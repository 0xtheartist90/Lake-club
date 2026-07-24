'use client';

import { useEffect, useMemo, useState } from 'react';

import { ArrowRight } from 'lucide-react';

const OT_BASE = 'https://www.opentable.ca/r/the-lake-club-friday-harbour-resort-innisfil?restref=1186012';

const TIMES = (() => {
    const out: { value: string; label: string }[] = [];
    for (let h = 11; h <= 21; h++) {
        for (const m of [0, 30]) {
            const hh = String(h).padStart(2, '0');
            const mm = String(m).padStart(2, '0');
            const ampm = h < 12 ? 'AM' : 'PM';
            const h12 = ((h + 11) % 12) + 1;
            out.push({ value: `${hh}:${mm}`, label: `${h12}:${mm} ${ampm}` });
        }
    }

    return out;
})();

export default function ReservationBar({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
    const [dates, setDates] = useState<{ value: string; label: string }[]>([]);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('19:00');
    const [covers, setCovers] = useState('2');

    useEffect(() => {
        const today = new Date();
        const opts: { value: string; label: string }[] = [];
        for (let i = 0; i < 30; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() + i);
            const value = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
            const label =
                i === 0
                    ? 'Today'
                    : i === 1
                      ? 'Tomorrow'
                      : d.toLocaleDateString('en-CA', { weekday: 'short', month: 'short', day: 'numeric' });
            opts.push({ value, label });
        }
        setDates(opts);
        setDate(opts[0].value);
    }, []);

    const href = useMemo(
        () => `${OT_BASE}&covers=${covers}&dateTime=${date}T${time}&utm_source=website&utm_medium=reserve_bar`,
        [covers, date, time]
    );

    const dark = variant === 'dark';

    return (
        <div className={`lc-resv ${dark ? 'lc-resv--dark' : ''}`}>
            <Field label='Guests'>
                <select value={covers} onChange={(e) => setCovers(e.target.value)} aria-label='Party size'>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                            {n} {n === 1 ? 'guest' : 'guests'}
                        </option>
                    ))}
                </select>
            </Field>
            <span className='lc-resv-div' aria-hidden='true' />
            <Field label='Date'>
                <select value={date} onChange={(e) => setDate(e.target.value)} aria-label='Date'>
                    {dates.length === 0 && <option>Today</option>}
                    {dates.map((d) => (
                        <option key={d.value} value={d.value}>
                            {d.label}
                        </option>
                    ))}
                </select>
            </Field>
            <span className='lc-resv-div' aria-hidden='true' />
            <Field label='Time'>
                <select value={time} onChange={(e) => setTime(e.target.value)} aria-label='Time'>
                    {TIMES.map((t) => (
                        <option key={t.value} value={t.value}>
                            {t.label}
                        </option>
                    ))}
                </select>
            </Field>
            <a href={href} target='_blank' rel='noopener noreferrer' className='lc-resv-btn'>
                Find a table <ArrowRight size={15} strokeWidth={1.7} />
            </a>

            <style>{`
                .lc-resv {
                    display: flex;
                    align-items: stretch;
                    background: rgba(212,222,227,0.97);
                    border-top: 2px solid var(--lc-accent);
                    max-width: 720px;
                    width: 100%;
                }
                .lc-resv--dark { background: rgba(20,32,42,0.82); backdrop-filter: blur(8px); }
                .lc-resv-field { display: flex; flex-direction: column; justify-content: center; gap: 4px; padding: 14px clamp(14px,2vw,22px); flex: 1; min-width: 0; }
                .lc-resv-flabel { font-family: var(--font-body); text-transform: uppercase; letter-spacing: 0.2em; font-weight: 600; font-size: 9.5px; color: var(--lc-accent); }
                .lc-resv--dark .lc-resv-flabel { color: var(--lc-accent-on-dark); }
                .lc-resv select {
                    appearance: none; -webkit-appearance: none;
                    background: transparent; border: none; outline: none;
                    font-family: var(--font-display); font-size: clamp(15px,1.4vw,18px); font-weight: 500;
                    color: var(--lc-ink); cursor: pointer; width: 100%;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23425969' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
                    background-repeat: no-repeat; background-position: right center; padding-right: 18px;
                }
                .lc-resv--dark select {
                    color: #fff !important;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
                }
                .lc-resv--dark select option { color: var(--lc-ink); background: #fff; }
                .lc-resv-div { width: 1px; background: var(--lc-line); align-self: stretch; }
                .lc-resv--dark .lc-resv-div { background: rgba(255,255,255,.16); }
                .lc-resv-btn {
                    display: inline-flex; align-items: center; justify-content: center; gap: 10px;
                    background: var(--lc-accent); color: #fff; text-decoration: none;
                    font-family: var(--font-body); text-transform: uppercase; letter-spacing: 0.16em;
                    font-weight: 600; font-size: 11px; padding: 0 clamp(20px,2.4vw,30px);
                    white-space: nowrap; transition: background .35s var(--lc-ease);
                }
                .lc-resv-btn:hover { background: var(--lc-ink); }
                .lc-resv-btn svg { transition: transform .35s var(--lc-ease); }
                .lc-resv-btn:hover svg { transform: translateX(4px); }
                @media (max-width: 620px){
                    .lc-resv { flex-wrap: wrap; }
                    .lc-resv-field { flex: 1 1 33%; }
                    .lc-resv-div { display: none; }
                    .lc-resv-btn { flex: 1 1 100%; height: 52px; }
                }
            `}</style>
        </div>
    );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className='lc-resv-field'>
            <span className='lc-resv-flabel'>{label}</span>
            {children}
        </div>
    );
}
