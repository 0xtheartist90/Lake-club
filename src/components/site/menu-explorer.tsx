'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import { DISH_ICONS, type DishIconName } from './dish-icons';
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
        img: 11,
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
        img: 1,
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
        img: 13,
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

    return (
        <section className='lc-menux' aria-label='Menus'>
            <div className='lc-menux-in'>
                <div className='lc-menux-head'>
                    <div>
                        <Reveal className='lc-mono' style={{ color: 'var(--lc-accent)', letterSpacing: '0.32em', fontSize: 10 }}>
                            The menus
                        </Reveal>
                        <Reveal delay={60}>
                            <h2 className='lc-display' style={{ fontSize: 'clamp(30px,3.6vw,48px)', color: 'var(--lc-ink)', margin: '14px 0 0', lineHeight: 1.02 }}>
                                Six menus, <span className='lc-italic' style={{ color: 'var(--lc-accent)' }}>one kitchen.</span>
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={120}>
                        <Link href='/menus' className='lc-btn lc-btn--ghost lc-menux-all'>
                            Full menu <ArrowRight size={14} strokeWidth={1.6} />
                        </Link>
                    </Reveal>
                </div>

                <Reveal delay={140} className='lc-menux-grid'>
                    {/* Category tabs */}
                    <nav className='lc-menux-tabs' role='tablist' aria-label='Menu categories'>
                        {CATEGORIES.map((c, i) => {
                            const Icon = DISH_ICONS[c.icon];
                            const is = i === active;

                            return (
                                <button
                                    key={c.key}
                                    role='tab'
                                    aria-selected={is}
                                    id={`lc-tab-${c.key}`}
                                    aria-controls='lc-menux-panel'
                                    onClick={() => setActive(i)}
                                    className={`lc-menux-tab ${is ? 'is-active' : ''}`}>
                                    <span className='lc-menux-tab-ic'>
                                        <Icon />
                                    </span>
                                    <span className='lc-menux-tab-tx'>
                                        <span className='lc-display lc-menux-tab-label'>{c.label}</span>
                                        <span className='lc-menux-tab-meta'>{c.meta}</span>
                                    </span>
                                </button>
                            );
                        })}
                    </nav>

                    {/* Items panel */}
                    <div id='lc-menux-panel' role='tabpanel' aria-labelledby={`lc-tab-${cat.key}`} className='lc-menux-panel'>
                        <ul key={cat.key} className='lc-menux-list'>
                            {cat.items.map((d) => (
                                <li key={d.name} className='lc-menux-item'>
                                    <div className='lc-menux-row'>
                                        <span className='lc-display lc-menux-name'>
                                            {d.name}
                                            {d.tag && <sup className='lc-menux-tag'>{d.tag}</sup>}
                                        </span>
                                        <span className='lc-menux-leader' aria-hidden='true' />
                                        <span className='lc-menux-price'>{d.price}</span>
                                    </div>
                                    {d.desc && <p className='lc-body lc-menux-desc'>{d.desc}</p>}
                                </li>
                            ))}
                        </ul>
                        <Link href={cat.href} className='lc-mono lc-menux-more'>
                            View the full {cat.label.toLowerCase()} menu <ArrowRight size={12} strokeWidth={1.7} />
                        </Link>
                    </div>

                    {/* Category photo — crossfades with the active tab */}
                    <div className='lc-menux-photo lc-media lc-frame' aria-hidden='true'>
                        {CATEGORIES.map((c, i) => (
                            <Image
                                key={c.key}
                                src={photo(c.img)}
                                alt=''
                                fill
                                sizes='(max-width: 1100px) 100vw, 30vw'
                                style={{
                                    objectFit: 'cover',
                                    opacity: i === active ? 1 : 0,
                                    transition: 'opacity 1s var(--lc-ease)'
                                }}
                            />
                        ))}
                        <div className='lc-menux-photo-scrim' />
                        <div className='lc-menux-photo-cap'>
                            <span className='lc-mono' style={{ color: 'var(--lc-accent-on-dark)', letterSpacing: '0.24em', fontSize: 9.5 }}>
                                {cat.meta}
                            </span>
                            <span className='lc-display' style={{ fontSize: 22, color: '#fff', marginTop: 4 }}>{cat.label}</span>
                        </div>
                    </div>
                </Reveal>
            </div>

            <style>{`
                .lc-menux { background: var(--lc-ivory); border-top: 1px solid var(--lc-line); }
                .lc-menux-in {
                    max-width: 1360px; margin: 0 auto;
                    padding: clamp(40px,5vh,64px) clamp(20px,3vw,48px);
                    display: flex; flex-direction: column;
                }
                @media (min-width: 901px){
                    /* fits in a single viewport */
                    .lc-menux-in { min-height: 0; max-height: none; }
                    .lc-menux { display: flex; align-items: center; min-height: 92vh; }
                    .lc-menux-in { width: 100%; }
                }
                .lc-menux-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-bottom: clamp(24px,3.4vh,40px); }
                .lc-menux-all { height: 44px; padding: 0 24px; }

                .lc-menux-grid { display: grid; grid-template-columns: 280px 1fr minmax(260px, 340px); gap: clamp(28px,3.4vw,60px); align-items: stretch; }
                .lc-menux-photo { position: relative; min-height: 460px; align-self: stretch; }
                .lc-menux-photo-scrim { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 58%, rgba(15,24,34,.72)); }
                .lc-menux-photo-cap { position: absolute; left: 24px; bottom: 22px; z-index: 3; display: flex; flex-direction: column; }

                /* Tabs */
                .lc-menux-tabs { display: flex; flex-direction: column; border-top: 1px solid var(--lc-line); }
                .lc-menux-tab {
                    display: flex; align-items: center; gap: 16px;
                    padding: 15px 4px; border: none; border-bottom: 1px solid var(--lc-line);
                    background: transparent; cursor: pointer; text-align: left;
                    transition: padding-left .35s var(--lc-ease), background .35s var(--lc-ease);
                }
                .lc-menux-tab:hover { padding-left: 10px; }
                .lc-menux-tab-ic { color: var(--lc-ink-faint); display: inline-flex; transition: color .3s var(--lc-ease); flex: 0 0 auto; }
                .lc-menux-tab-tx { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
                .lc-menux-tab-label { font-size: 19px; color: var(--lc-ink-soft); line-height: 1.1; transition: color .3s var(--lc-ease); }
                .lc-menux-tab-meta { font-family: var(--font-body); font-size: 9.5px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: var(--lc-ink-faint); }
                .lc-menux-tab.is-active { padding-left: 10px; }
                .lc-menux-tab.is-active .lc-menux-tab-ic { color: var(--lc-accent); }
                .lc-menux-tab.is-active .lc-menux-tab-label { color: var(--lc-ink); }
                .lc-menux-tab.is-active { border-bottom-color: var(--lc-accent); }

                /* Panel — fixed min-height so switching tabs never shifts the layout */
                .lc-menux-panel { min-height: 500px; }
                .lc-menux-list { list-style: none; padding: 0; margin: 0; animation: lc-menux-fade .45s var(--lc-ease); border-top: 1px solid var(--lc-line); }
                @keyframes lc-menux-fade { from { opacity: 0; } }
                .lc-menux-item { padding: clamp(11px,1.5vh,15px) 0; border-bottom: 1px solid var(--lc-line); }
                .lc-menux-row { display: flex; align-items: baseline; gap: 12px; }
                .lc-menux-name { font-size: clamp(17px,1.6vw,20px); color: var(--lc-ink); line-height: 1.15; }
                .lc-menux-tag { font-family: var(--font-body); font-size: 8.5px; font-weight: 500; color: var(--lc-accent); margin-left: 7px; letter-spacing: 0.1em; }
                .lc-menux-leader { flex: 1; border-bottom: 1px dotted var(--lc-ink-faint); transform: translateY(-4px); }
                .lc-menux-price { font-family: var(--font-display); font-size: 15.5px; color: var(--lc-ink); }
                .lc-menux-price::before { content: '$'; font-size: 11px; color: var(--lc-ink-soft); margin-right: 1px; }
                .lc-menux-desc { font-size: 12.5px; line-height: 1.5; color: var(--lc-ink-soft); margin: 4px 0 0; max-width: 88%; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; }
                .lc-menux-more {
                    display: inline-flex; align-items: center; gap: 8px;
                    margin-top: 18px; color: var(--lc-accent); text-decoration: none;
                    font-size: 10px; letter-spacing: 0.22em;
                }
                .lc-menux-more:hover { color: var(--lc-ink); }

                @media (max-width: 1100px) and (min-width: 901px){
                    .lc-menux-grid { grid-template-columns: 260px 1fr; }
                    .lc-menux-photo { display: none; }
                }
                @media (max-width: 900px){
                    .lc-menux-grid { grid-template-columns: 1fr; gap: 24px; }
                    .lc-menux-photo { order: 2; min-height: 0; height: clamp(160px, 42vw, 240px); }
                    .lc-menux-panel { order: 3; }
                    .lc-menux-tabs { order: 1; flex-direction: row; overflow-x: auto; border-top: none; border-bottom: 1px solid var(--lc-line); scrollbar-width: none; }
                    .lc-menux-tabs::-webkit-scrollbar { display: none; }
                    .lc-menux-tab { flex: 0 0 auto; flex-direction: column; align-items: center; gap: 8px; padding: 12px 14px !important; border-bottom: 2px solid transparent; }
                    .lc-menux-tab.is-active { border-bottom-color: var(--lc-accent); }
                    .lc-menux-tab-tx { align-items: center; }
                    .lc-menux-tab-label { font-size: 15px; }
                    .lc-menux-tab-meta { display: none; }
                    .lc-menux-desc { max-width: 100%; }
                }
            `}</style>
        </section>
    );
}
