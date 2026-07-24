'use client';

import { ArrowRight, Phone } from 'lucide-react';

import { PHONE_HREF, RESERVE_URL } from './nav-links';

export default function LcStickyBar() {
    return (
        <div
            className='lc-sticky-bar'
            style={{
                position: 'fixed',
                bottom: 16,
                left: 16,
                right: 16,
                zIndex: 55,
                maxWidth: 560,
                margin: '0 auto',
                background: 'rgba(20,32,42,0.97)',
                color: '#fff',
                borderRadius: 0,
                borderTop: '2px solid var(--lc-accent)',
                padding: '12px 14px 12px 20px',
                alignItems: 'center',
                gap: 12,
                boxShadow: '0 18px 44px rgba(0,0,0,.32)'
            }}>
            <div style={{ flex: 1, lineHeight: 1.2 }}>
                <div className='lc-mono' style={{ fontSize: 10, color: 'var(--lc-accent-on-dark)', letterSpacing: '0.16em' }}>
                    Open to the public
                </div>
                <div className='lc-display' style={{ fontSize: 16, marginTop: 2, color: '#fff' }}>
                    Lake Club
                </div>
            </div>
            <a
                href={PHONE_HREF}
                className='lc-btn lc-btn--ghost-light'
                style={{ height: 44, padding: '0 16px', fontSize: 12 }}>
                <Phone size={13} strokeWidth={1.6} /> Call
            </a>
            <a
                href={RESERVE_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='lc-btn lc-btn--primary'
                style={{ height: 44, padding: '0 18px', fontSize: 13 }}>
                Reserve <ArrowRight size={14} strokeWidth={1.6} />
            </a>
            <style>{`
                .lc-sticky-bar { display: none; }
                @media (max-width: 767px){ .lc-sticky-bar { display: flex; } }
            `}</style>
        </div>
    );
}
