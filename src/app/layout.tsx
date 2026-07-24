import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';

import LcFooter from '@/components/site/lc-footer';
import LcNav from '@/components/site/lc-nav';
import SmoothScroll from '@/components/site/smooth-scroll';

import '@/app/globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
});

const fraunces = Fraunces({
    subsets: ['latin'],
    variable: '--font-fraunces',
    display: 'swap',
    style: ['normal', 'italic'],
    axes: ['opsz', 'SOFT', 'WONK']
});

export const metadata: Metadata = {
    title: {
        default: 'The Lake Club at Friday Harbour',
        template: '%s · The Lake Club'
    },
    description:
        'Marina-facing dining on Lake Simcoe. Brunch, lunch and dinner at The Lake Club at Friday Harbour, Innisfil. Open to the public — reservations welcome.',
    metadataBase: new URL('https://lakeclub.fridayharbour.com')
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html lang='en-CA'>
            <body
                className={`${inter.variable} ${fraunces.variable} antialiased`}
                style={{ background: 'var(--lc-cream)', color: 'var(--lc-ink)', fontFamily: 'var(--font-body)' }}>
                <a href='#main' className='lc-skip-link'>
                    Skip to content
                </a>
                <SmoothScroll />
                <LcNav />
                {children}
                <LcFooter />
            </body>
        </html>
    );
};

export default Layout;
