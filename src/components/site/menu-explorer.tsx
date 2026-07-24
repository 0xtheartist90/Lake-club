'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import { DISH_ICONS, type DishIconName } from './dish-icons';
import { RESERVE_URL } from './nav-links';
import Parallax from './parallax';
import Reveal from './reveal';

const photo = (n: number) => `/images/Lakeclub%20(${n}).jpg`;

type Item = { name: string; price: string; tag?: string; desc?: string };
type Category = {
    key: string;
    label: string;
    icon: DishIconName;
    meta: string;
    href: string;
    img: number;
    items: Item[];
};

/* Dinner + lunch items are from the live Lake Club menu; the rest are
   placeholders to swap once the remaining menus are provided. */
const CATEGORIES: Category[] = [
    {
        key: 'lunch',
        img: 21,
        label: 'Lunch',
        icon: 'sun',
        meta: 'Mon–Fri · 11am – 5pm',
        href: '/menus',
        items: [
            { name: 'Lake Club Burger', price: '29', desc: 'Angus patty, pulled shortrib, onion rings, basil aioli, swiss' },
            { name: 'LC Classic Club Sandwich', price: '29', desc: 'Rotisserie chicken, Ontario bacon, fried egg, mustard aioli' },
            { name: 'Fish ’n’ Chips', price: '29', desc: 'Beer battered haddock, coleslaw, tartar sauce, lemon' },
            { name: 'Lake Club Caesar', price: '17', desc: 'Romaine, bacon bits, croutons, parmigiano' },
            { name: 'Chickpea & Bean Burger', price: '23', tag: '(V)', desc: 'Breaded bean mix, cheddar, herb aioli' },
            { name: 'Lake Club Fries', price: '13', tag: '(V)(GF)', desc: 'Truffle oil, parmigiano, house ketchup' }
        ]
    },
    {
        key: 'dinner',
        img: 16,
        label: 'Dinner',
        icon: 'cloche',
        meta: 'Nightly · 5pm – 9pm',
        href: '/menus',
        items: [
            { name: 'Burrata', price: '29', tag: '(V)', desc: 'Heirloom tomatoes, truffle honey, aged balsamic, focaccia' },
            { name: 'Chorizo Mussels', price: '20', desc: 'Chilies, tomatoes, herbs, tomato broth, house bread' },
            { name: 'Dry-Aged Beef Striploin', price: '51', tag: '(GF)', desc: 'Caramelised onion, smashed potato, green pea crema, port jus' },
            { name: 'Atlantic Salmon Puttanesca', price: '39', desc: 'Couscous, cracked olives, capers, herb broth' },
            { name: 'Ontario Lamb Rack', price: '51', tag: '(GF)', desc: 'Pistachio herb crust, cauliflower purée, gremolata' },
            { name: 'Gnocchi Cacio e Pepe', price: '33', tag: '(V)', desc: 'Cracked black pepper, kale, pecorino romano' }
        ]
    },
    {
        key: 'brunch',
        img: 9,
        label: 'Brunch',
        icon: 'cup',
        meta: 'Sat–Sun · 10am – 4pm',
        href: '/brunch',
        items: [
            { name: 'Lake Club Benedict', price: '24', desc: 'Poached eggs, peameal bacon, hollandaise, home fries' },
            { name: 'Buttermilk Pancakes', price: '19', tag: '(V)', desc: 'Whipped butter, Ontario maple syrup, berries' },
            { name: 'Steak & Eggs', price: '32', tag: '(GF)', desc: 'Grilled flat iron, two eggs any style, chimichurri' },
            { name: 'Harbour French Toast', price: '21', tag: '(V)', desc: 'Brioche, vanilla mascarpone, seasonal fruit' },
            { name: 'Smoked Salmon Bagel', price: '23', desc: 'Whipped cream cheese, capers, pickled onion, dill' },
            { name: 'Breakfast Poutine', price: '22', desc: 'Home fries, cheese curds, hollandaise, fried egg, bacon' }
        ]
    },
    {
        key: 'dessert',
        img: 27,
        label: 'Dessert',
        icon: 'cake',
        meta: 'Served all day',
        href: '/menus',
        items: [
            { name: 'Basque Cheesecake', price: '14', tag: '(V)', desc: 'Burnt top, macerated Niagara cherries' },
            { name: 'Dark Chocolate Torte', price: '15', tag: '(V)', desc: 'Sea salt, crème fraîche, cocoa nib' },
            { name: 'Sticky Toffee Pudding', price: '14', tag: '(V)', desc: 'Warm toffee sauce, vanilla ice cream' },
            { name: 'Seasonal Sorbet', price: '11', tag: '(V)(GF)', desc: 'Ask your server for today’s flavours' },
            { name: 'Affogato', price: '12', tag: '(V)', desc: 'Espresso, vanilla gelato, amaretti crumb' }
        ]
    },
    {
        key: 'beverage',
        img: 28,
        label: 'Beverage & Wine',
        icon: 'coupe',
        meta: 'Open to close',
        href: '/menus',
        items: [
            { name: 'Golden Hour Spritz', price: '17', desc: 'Aperol, prosecco, orange, patio in a glass' },
            { name: 'Harbour Old Fashioned', price: '19', desc: 'Rye, demerara, orange & cherry' },
            { name: 'Marina Caesar', price: '16', desc: 'House rim spice, pickled garnish' },
            { name: 'Espresso Martini', price: '18', desc: 'Vodka, cold brew, coffee liqueur' },
            { name: 'Niagara Riesling', price: '15', desc: '6oz glass · Ontario VQA list by the bottle' },
            { name: 'Ontario Craft Lager', price: '9', desc: 'Rotating local taps' }
        ]
    },
    {
        key: 'seasonal',
        img: 34,
        label: 'Seasonal',
        icon: 'sprig',
        meta: 'Summer 2026',
        href: '/menus',
        items: [
            { name: 'Georgian Bay White Fish', price: '41', tag: '(GF)', desc: 'Chorizo ragout, caviar, broccolini, orange beurre blanc' },
            { name: 'Shrimp Risotto Milanese', price: '35', tag: '(GF)', desc: 'Spinach, cherry tomato, saffron, peas' },
            { name: 'Truffle Chicken Supreme', price: '41', tag: '(GF)', desc: 'Mushroom duxelles, truffle mash, tarragon sauce' },
            { name: 'Baseball Steak & Fries', price: '39', tag: '(GF)', desc: 'Wellington County steak, Lake Club fries, port jus' },
            { name: 'Prosciutto di Parma', price: '19', desc: '36-month aged, arugula, parmigiano' }
        ]
    }
];

export default function MenuExplorer() {
    const [active, setActive] = useState(1); // Dinner first
    const cat = CATEGORIES[active];
    const Icon = DISH_ICONS[cat.icon];

    return (
        <section className='lc-sig' aria-label='Menus' id='menus'>
            <div className='lc-sig-grid'>
                {/* LEFT — accent menu panel */}
                <div className='lc-sig-panel'>
                    <Reveal className='lc-sig-panel-head'>
                        <div>
                            <span className='lc-mono' style={{ color: 'var(--lc-accent-on-dark)', letterSpacing: '0.26em', fontSize: 9.5 }}>
                                {cat.meta}
                            </span>
                            <h3 className='lc-display lc-sig-cat'>{cat.label}</h3>
                        </div>
                        <span className='lc-sig-icon' aria-hidden='true'>
                            <Icon />
                        </span>
                    </Reveal>

                    <Reveal delay={90}>
                        <nav className='lc-sig-tabs' role='tablist' aria-label='Menu categories'>
                            {CATEGORIES.map((c, i) => (
                                <button
                                    key={c.key}
                                    role='tab'
                                    aria-selected={i === active}
                                    onClick={() => setActive(i)}
                                    className={`lc-sig-tab ${i === active ? 'is-active' : ''}`}>
                                    {c.label}
                                </button>
                            ))}
                        </nav>
                    </Reveal>

                    <ul key={cat.key} className='lc-sig-list'>
                        {cat.items.map((d, i) => (
                            <Reveal as='li' key={d.name} variant='fade' delay={i * 70} className='lc-sig-item'>
                                <div className='lc-sig-item-row'>
                                    <span className='lc-display lc-sig-name'>
                                        {d.name}
                                        {d.tag && <sup className='lc-sig-tag'>{d.tag}</sup>}
                                    </span>
                                    <span className='lc-sig-leader' aria-hidden='true' />
                                    <span className='lc-sig-price'>{d.price}</span>
                                </div>
                                {d.desc && <p className='lc-body lc-sig-desc'>{d.desc}</p>}
                            </Reveal>
                        ))}
                    </ul>

                    <Reveal delay={180}>
                        <Link href={cat.href} className='lc-btn lc-btn--ghost-light lc-sig-full'>
                            View full menu <ArrowRight size={14} strokeWidth={1.6} />
                        </Link>
                    </Reveal>
                </div>

                {/* RIGHT TOP — intro */}
                <div className='lc-sig-intro'>
                    <Reveal className='lc-mono' style={{ color: 'var(--lc-accent)', letterSpacing: '0.32em', fontSize: 10 }}>
                        The menu
                    </Reveal>
                    <Reveal delay={70}>
                        <h2 className='lc-display lc-sig-title'>
                            Signature dishes.
                            <br />
                            <span className='lc-italic' style={{ color: 'var(--lc-accent)' }}>From the pass.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={130}>
                        <p className='lc-body lc-sig-copy'>
                            One marina-facing kitchen, six menus. Seasonal Canadian plates with global influence —
                            share plates and dry-aged steaks to weekend brunch and a cellar built for long tables.
                        </p>
                    </Reveal>
                    <Reveal delay={180}>
                        <a href={RESERVE_URL} target='_blank' rel='noopener noreferrer' className='lc-btn lc-btn--dark lc-sig-reserve'>
                            Reserve a table <ArrowRight size={14} strokeWidth={1.6} />
                        </a>
                    </Reveal>
                </div>

                {/* RIGHT BOTTOM — image (crossfades with category) */}
                <Reveal variant='image' className='lc-sig-media lc-media'>
                    <Parallax strength={44} scale={1.16}>
                        {CATEGORIES.map((c, i) => (
                            <Image
                                key={c.key}
                                src={photo(c.img)}
                                alt=''
                                aria-hidden='true'
                                fill
                                sizes='(max-width: 900px) 100vw, 50vw'
                                style={{ objectFit: 'cover', opacity: i === active ? 1 : 0, transition: 'opacity 1s var(--lc-ease)' }}
                            />
                        ))}
                    </Parallax>
                </Reveal>
            </div>

            <style>{`
                .lc-sig { background: var(--lc-cream); }
                .lc-sig-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: auto 1fr;
                    grid-template-areas: "panel intro" "panel media";
                    min-height: min(92vh, 940px);
                }

                /* LEFT panel */
                .lc-sig-panel {
                    grid-area: panel; position: relative; overflow: hidden;
                    background: var(--lc-accent); color: #fff;
                    padding: clamp(32px,3.4vw,56px);
                    display: flex; flex-direction: column;
                }
                /* palm-leaf pattern faintly blended into the slate panel */
                .lc-sig-panel::before {
                    content: ''; position: absolute; inset: 0; z-index: 0; pointer-events: none;
                    background-image: url(/backgroundpattern2.jpg);
                    background-repeat: repeat;
                    background-size: clamp(300px, 26vw, 420px) auto;
                    mix-blend-mode: soft-light;
                    opacity: 0.05;
                }
                .lc-sig-panel > * { position: relative; z-index: 1; }
                .lc-sig-panel-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; }
                .lc-sig-cat { font-size: clamp(30px,3.4vw,46px); color: #fff; margin: 8px 0 0; line-height: 1; }
                .lc-sig-icon { color: rgba(255,255,255,.85); display: inline-flex; margin-top: 6px; }
                .lc-sig-icon svg { width: 26px; height: 26px; }

                .lc-sig-tabs { display: flex; flex-wrap: wrap; gap: 8px 18px; margin: 22px 0 8px; padding-bottom: 18px; border-bottom: 1px solid rgba(255,255,255,.2); }
                .lc-sig-tab {
                    background: none; border: none; cursor: pointer; padding: 0 0 3px;
                    font-family: var(--font-body); font-size: 10px; font-weight: 600;
                    letter-spacing: 0.18em; text-transform: uppercase;
                    color: rgba(255,255,255,.6); border-bottom: 1px solid transparent;
                    transition: color .3s var(--lc-ease), border-color .3s var(--lc-ease);
                }
                .lc-sig-tab:hover { color: rgba(255,255,255,.9); }
                .lc-sig-tab.is-active { color: #fff; border-bottom-color: #fff; }

                .lc-sig-list { list-style: none; padding: 0; margin: 0; flex: 1; }
                .lc-sig-item { padding: clamp(11px,1.3vw,15px) 0; border-bottom: 1px solid rgba(255,255,255,.16); }
                .lc-sig-item:last-child { border-bottom: none; }
                .lc-sig-item-row { display: flex; align-items: baseline; gap: 12px; }
                .lc-sig-name { font-size: clamp(16px,1.5vw,19px); color: #fff; line-height: 1.15; }
                .lc-sig-tag { font-family: var(--font-body); font-size: 8px; font-weight: 500; color: rgba(255,255,255,.75); margin-left: 6px; letter-spacing: 0.08em; }
                .lc-sig-leader { flex: 1; border-bottom: 1px dotted rgba(255,255,255,.32); transform: translateY(-4px); }
                .lc-sig-price { font-family: var(--font-display); font-size: 15px; color: #fff; }
                .lc-sig-price::before { content: '$'; font-size: 11px; color: rgba(255,255,255,.7); margin-right: 1px; }
                .lc-sig-desc { font-size: 12px; line-height: 1.5; color: rgba(255,255,255,.7); margin: 4px 0 0; max-width: 92%;
                    overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; }
                .lc-sig-full { width: 100%; margin-top: clamp(20px,2.4vw,32px); }

                /* RIGHT intro */
                .lc-sig-intro {
                    grid-area: intro; background: var(--lc-cream);
                    padding: clamp(40px,4.4vw,72px) clamp(28px,4vw,72px);
                    display: flex; flex-direction: column; justify-content: center;
                }
                .lc-sig-title { font-size: clamp(30px,3.6vw,52px); color: var(--lc-ink); margin: 16px 0 0; line-height: 1.04; }
                .lc-sig-copy { font-size: 15px; line-height: 1.7; color: var(--lc-ink-soft); margin: 20px 0 30px; max-width: 460px; }
                .lc-sig-reserve { align-self: flex-start; }

                /* RIGHT media */
                .lc-sig-media { grid-area: media; position: relative; min-height: 320px; background: var(--lc-sand); }

                @media (max-width: 900px){
                    .lc-sig-grid {
                        grid-template-columns: 1fr;
                        grid-template-rows: auto auto auto;
                        grid-template-areas: "intro" "panel" "media";
                        min-height: 0;
                    }
                    .lc-sig-media { aspect-ratio: 16 / 10; min-height: 0; }
                    .lc-sig-tabs { overflow-x: auto; flex-wrap: nowrap; scrollbar-width: none; }
                    .lc-sig-tabs::-webkit-scrollbar { display: none; }
                    .lc-sig-tab { flex: 0 0 auto; }
                }
            `}</style>
        </section>
    );
}
