import Image from 'next/image';

import { ArrowUpRight } from 'lucide-react';

import Reveal from './reveal';

/* Real Google reviews, pulled from the original Lake Club site. */
const FEATURED = {
    text: 'The service is 5 star, and the views are magical. Winter, spring, summer or fall, it’s always a beautiful experience. My favorite restaurant at Friday Harbour!',
    author: 'Krista L.'
};

const REVIEWS = [
    { a: 'Wendy M.', s: 5, t: 'We came for dessert only tonight for our anniversary. The tower cake was a fabulous way to celebrate together with our daughter and grandsons. The atmosphere was perfect!' },
    { a: 'Sandy L.', s: 5, t: 'We had a wonderful dining experience! The food was absolutely delicious … made us feel genuinely welcome.' },
    { a: 'John S.', s: 4, t: 'This is a beautiful restaurant in a fantastic location, built on and over Lake Simcoe. The restaurant’s patio is large and nicely situated on the water.' },
    { a: 'Ida Z.', s: 5, t: 'It feels like a staycation whenever we come to the Lake Club. Great food & even better service! It’s truly a treat in the city.' },
    { a: 'Stephen & Jenn F.', s: 5, t: 'Sitting by the water, with great service and food, is a very nice way to enjoy an Ontario summer. We had the trout and beets and the salmon pesto, both were very well prepared.' },
    { a: 'Amneet B.', s: 5, t: 'The vibes are amazing at this place! Takes you back to a nice beach club vibe. Food was decent but the 13 layer cake was amazing!' },
    { a: 'Debra P.', s: 5, t: 'Great place for a meal! Pleasant atmosphere overlooking a marina and the staff were wonderful. The food was excellent!' },
    { a: 'Jasmine B.', s: 5, t: 'Loved everything about the Lake Club. The delicious food and the most amazing service. I would highly recommend visiting when you can!' },
    { a: 'Saundra', s: 5, t: 'Gorgeous restaurant with amazing views of Friday Harbour. Service was impeccable and the amazing menu offered so many delicious choices.' },
    { a: 'Duane P.', s: 5, t: 'Went for brunch and had amazing food and the service was incredible. With the floor to ceiling windows we were able to watch the first snowfall of the season.' },
    { a: 'Dominic L.', s: 5, t: 'Always a fun time at Lake Club. From business dinners to dates. Amazing food, great service, amazing date night restaurant!' },
    { a: 'Aidan A.', s: 5, t: 'Stunning lake views set a lovely atmosphere. The staff were incredibly friendly and attentive. Our meals were delicious, service was impressively fast.' }
];

function Stars({ n = 5, size = 11 }: { n?: number; size?: number }) {
    return (
        <span style={{ display: 'inline-flex', gap: 3, color: 'var(--lc-accent)' }} aria-label={`${n} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width={size} height={size} viewBox='0 0 24 24' fill='currentColor' aria-hidden='true' style={{ opacity: i < n ? 1 : 0.25 }}>
                    <path d='M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6z' />
                </svg>
            ))}
        </span>
    );
}

export default function Testimonials() {
    return (
        <section className='lc-revq' aria-label='What our guests say' id='reviews'>
            <div className='lc-revq-in'>
                <div className='lc-revq-grid'>
                    {/* Rating rail */}
                    <Reveal className='lc-revq-rail'>
                        <div className='lc-mono' style={{ color: 'var(--lc-accent)', letterSpacing: '0.32em', fontSize: 10 }}>
                            In their words
                        </div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 20 }}>
                            <span className='lc-display' style={{ fontSize: 'clamp(56px,7vw,92px)', color: 'var(--lc-ink)', lineHeight: 0.9 }}>
                                4.4
                            </span>
                            <Stars size={20} />
                        </div>
                        <div className='lc-mono' style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--lc-ink-soft)', marginTop: 14 }}>
                            293 Google reviews
                        </div>
                        <a
                            href='https://www.google.com/maps?cid=2256011672654664302'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='lc-mono lc-revq-all'>
                            Read them all on Google <ArrowUpRight size={13} strokeWidth={1.7} />
                        </a>
                    </Reveal>

                    {/* Featured quote */}
                    <div style={{ minWidth: 0 }}>
                        <Reveal delay={80}>
                            <blockquote className='lc-display lc-revq-featured'>
                                <span className='lc-italic' style={{ color: 'var(--lc-accent)' }}>&ldquo;</span>
                                {FEATURED.text}
                                <span className='lc-italic' style={{ color: 'var(--lc-accent)' }}>&rdquo;</span>
                            </blockquote>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20 }}>
                                <Stars />
                                <span className='lc-mono' style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--lc-ink)' }}>
                                    {FEATURED.author} · Google review
                                </span>
                            </div>
                        </Reveal>
                    </div>

                    {/* Guest photo */}
                    <Reveal delay={140} className='lc-media lc-zoom lc-frame lc-revq-photo'>
                        <Image
                            src='/images/Lakeclub%20(11).jpg'
                            alt='A guest at The Lake Club'
                            fill
                            sizes='(max-width: 1000px) 100vw, 24vw'
                            style={{ objectFit: 'cover' }}
                        />
                    </Reveal>
                </div>
            </div>

            {/* Auto-scroll review card marquee */}
            <Reveal delay={120} className='lc-revq-carousel' style={{ marginTop: 'clamp(36px,4.5vw,56px)' }}>
                <div className='lc-revq-track'>
                    {[0, 1].map((run) => (
                        <div className='lc-revq-run' key={run} aria-hidden={run === 1}>
                            {REVIEWS.map((r) => (
                                <figure className='lc-revq-card' key={`${run}-${r.a}`}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                                        <Stars n={r.s} />
                                        <span className='lc-mono' style={{ fontSize: 8.5, letterSpacing: '0.2em', color: 'var(--lc-ink-faint)' }}>
                                            Google
                                        </span>
                                    </div>
                                    <blockquote className='lc-body lc-revq-card-tx'>&ldquo;{r.t}&rdquo;</blockquote>
                                    <figcaption className='lc-mono lc-revq-card-by'>{r.a}</figcaption>
                                </figure>
                            ))}
                        </div>
                    ))}
                </div>
            </Reveal>

            <style>{`
                .lc-revq { background: var(--lc-cream); border-top: 1px solid var(--lc-line); padding: clamp(80px,10vw,150px) 0; overflow: hidden; }
                .lc-revq-in { max-width: 1360px; margin: 0 auto; padding: 0 clamp(20px,3vw,48px); }
                .lc-revq-grid { display: grid; grid-template-columns: 0.7fr 1.7fr 0.75fr; gap: clamp(28px,4vw,64px); align-items: center; }
                .lc-revq-photo { position: relative; aspect-ratio: 3 / 4; }
                @media (max-width: 1000px){ .lc-revq-photo { display: none; } }
                .lc-revq-all { display: inline-flex; align-items: center; gap: 8px; margin-top: 22px; font-size: 9.5px; letter-spacing: 0.22em; color: var(--lc-accent); text-decoration: none; border-bottom: 1px solid rgba(66,89,105,.35); padding-bottom: 5px; transition: color .4s var(--lc-ease), border-color .4s var(--lc-ease); }
                .lc-revq-all:hover { color: var(--lc-ink); border-color: var(--lc-ink); }
                .lc-revq-featured { font-size: clamp(22px,2.8vw,38px); line-height: 1.34; color: var(--lc-ink); margin: 0; }

                .lc-revq-carousel {
                    overflow: hidden;
                    -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 48px, #000 calc(100% - 48px), transparent 100%);
                    mask-image: linear-gradient(90deg, transparent 0, #000 48px, #000 calc(100% - 48px), transparent 100%);
                }
                .lc-revq-track { display: flex; width: max-content; animation: lc-revq-scroll 90s linear infinite; }
                .lc-revq-carousel:hover .lc-revq-track { animation-play-state: paused; }
                .lc-revq-run { display: flex; }
                .lc-revq-card {
                    flex: 0 0 320px; margin: 0 0 0 3px;
                    background: var(--lc-ivory); border: 1px solid var(--lc-line);
                    padding: 26px; display: flex; flex-direction: column; gap: 16px;
                }
                .lc-revq-card-tx { font-size: 13.5px; line-height: 1.6; color: var(--lc-ink); margin: 0; flex: 1; }
                .lc-revq-card-by { font-size: 9.5px; letter-spacing: 0.2em; color: var(--lc-ink-soft); }
                @keyframes lc-revq-scroll { to { transform: translateX(-50%); } }
                @media (prefers-reduced-motion: reduce){
                    .lc-revq-track { animation: none; }
                    .lc-revq-carousel { overflow-x: auto; mask-image: none; -webkit-mask-image: none; }
                }
                @media (max-width: 900px){
                    .lc-revq-grid { grid-template-columns: 1fr; }
                    .lc-revq-card { flex-basis: 285px; }
                }
            `}</style>
        </section>
    );
}
