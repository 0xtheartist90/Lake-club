'use client';

import { useState } from 'react';

import { ArrowRight } from 'lucide-react';

export default function NewsletterForm() {
    const [done, setDone] = useState(false);

    if (done) {
        return (
            <p className='lc-body' style={{ fontSize: 15, color: 'var(--lc-ink)', margin: 0 }}>
                Thank you — you're on the list. We'll be in touch.
            </p>
        );
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
            }}
            style={{ display: 'grid', gap: 26 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26 }} className='lc-nl-grid'>
                <input className='lc-field' type='text' name='name' placeholder='First name' aria-label='First name' required />
                <input className='lc-field' type='email' name='email' placeholder='Email address' aria-label='Email address' required />
            </div>
            <label className='lc-body' style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 12.5, color: 'var(--lc-ink-soft)', lineHeight: 1.5 }}>
                <input type='checkbox' required style={{ marginTop: 2, accentColor: 'var(--lc-accent)' }} />
                <span>
                    I'd like to receive news, events and seasonal menus from The Lake Club. I can unsubscribe at any
                    time.
                </span>
            </label>
            <button type='submit' className='lc-btn lc-btn--dark' style={{ justifySelf: 'start', minWidth: 200 }}>
                Sign up <ArrowRight size={15} strokeWidth={1.6} />
            </button>
            <style>{`@media (max-width: 520px){ .lc-nl-grid { grid-template-columns: 1fr !important; } }`}</style>
        </form>
    );
}
