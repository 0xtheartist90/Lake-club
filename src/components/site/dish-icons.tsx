import type { SVGProps } from 'react';

/**
 * Custom hand-drawn-style line icons for the menu.
 * 24px grid · 1.4 stroke · round caps — quiet, premium, never emoji-like.
 */

const base: SVGProps<SVGSVGElement> = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true
};

/** Burrata / vegetarian — single leaf with vein */
export function IconLeaf(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...base} {...props}>
            <path d='M20 4C10.5 4.8 5 9.5 4.2 15.4c3.2.6 6.4.1 9-1.6C16.6 11.6 19 8.4 20 4Z' />
            <path d='M4 20C7.5 13.5 12.5 9 18.5 5.5' />
        </svg>
    );
}

/** Mussels — fan shell with ridges */
export function IconShell(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...base} {...props}>
            <path d='M12 4c-4.6 0-8 3.6-8 8.2L12 20l8-7.8C20 7.6 16.6 4 12 4Z' />
            <path d='M12 4v16' />
            <path d='M6.8 6.2 12 20M17.2 6.2 12 20' />
        </svg>
    );
}

/** Striploin — cut of beef with marbling */
export function IconSteak(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...base} {...props}>
            <path d='M4.5 13.2C4.5 8.8 8 6 12.6 6c4 0 6.9 1.9 6.9 4.8 0 2.4-1.8 3.7-3.9 3.7-1.6 0-2.5.9-2.5 2.2 0 1.7-1.4 3.3-3.8 3.3-2.9 0-4.8-3-4.8-6.8Z' />
            <path d='M8.2 14.6c1.7-.2 2.8-1.5 3-3.2' />
            <path d='M15.4 10.9h.01' />
        </svg>
    );
}

/** Salmon — fish with tail */
export function IconFish(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...base} {...props}>
            <path d='M2.5 12C6 7.9 10 6 14 6c2.6 1.8 3.8 4 3.8 6s-1.2 4.2-3.8 6c-4 0-8-1.9-11.5-6Z' />
            <path d='M17.8 9.4 21.5 6.6v10.8l-3.7-2.8' />
            <path d='M6.8 10.8h.01' />
        </svg>
    );
}

/** Lamb rack — frenched chop */
export function IconChop(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...base} {...props}>
            <circle cx='12' cy='15.8' r='4.4' />
            <path d='M12 11.4V3.2' />
            <path d='M9.8 3.2h4.4' />
        </svg>
    );
}

/** Coupe glass — bar & cocktails */
export function IconCoupe(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...base} {...props}>
            <path d='M4 5h16c0 4-3.2 6.8-8 6.8S4 9 4 5Z' />
            <path d='M12 11.8V20M7.5 20h9' />
        </svg>
    );
}

/** Sun over water — lunch */
export function IconSun(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...base} {...props}>
            <circle cx='12' cy='11' r='4' />
            <path d='M12 3.5V5M6.7 5.7l1 1M17.3 5.7l-1 1M4 11h1.5M18.5 11H20' />
            <path d='M3.5 18c1.4 1 2.8 1 4.2 0s2.8-1 4.2 0 2.9 1 4.3 0 2.4-1 3.8 0' />
        </svg>
    );
}

/** Cloche — dinner service */
export function IconCloche(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...base} {...props}>
            <path d='M5 16a7 7 0 0 1 14 0' />
            <path d='M3 16h18' />
            <path d='M12 9V7.6' />
            <path d='M10.8 6.4h2.4' />
        </svg>
    );
}

/** Coffee cup — weekend brunch */
export function IconCup(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...base} {...props}>
            <path d='M5 10h11v5.5A4.5 4.5 0 0 1 11.5 20h-2A4.5 4.5 0 0 1 5 15.5V10Z' />
            <path d='M16 11.5h1.6a2.4 2.4 0 0 1 0 4.8H16' />
            <path d='M8.2 6.8c0-1 .8-1.2.8-2M11.8 6.8c0-1 .8-1.2.8-2' />
        </svg>
    );
}

/** Cake slice — dessert */
export function IconCake(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...base} {...props}>
            <path d='M4 19.5 12 6l8 13.5H4Z' />
            <path d='M7.2 14.2c1.4 1 2.8 1 4.2 0s3.2-1 4.6 0' />
            <path d='M12 6c1-.8 1-2 .2-2.8' />
        </svg>
    );
}

/** Sprig — seasonal features */
export function IconSprig(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...base} {...props}>
            <path d='M12 20c0-6.5 1.5-11 5-15' />
            <path d='M12.6 12.5C9.6 12.2 7.6 10.4 7 7c3.4.4 5.4 2 6.2 5' />
            <path d='M14 9.4c-.2-2.6.8-4.6 3-6.4.6 2.8-.2 5-2.2 6.6' />
        </svg>
    );
}

export const DISH_ICONS = {
    leaf: IconLeaf,
    shell: IconShell,
    steak: IconSteak,
    fish: IconFish,
    chop: IconChop,
    coupe: IconCoupe,
    sun: IconSun,
    cloche: IconCloche,
    cup: IconCup,
    cake: IconCake,
    sprig: IconSprig
} as const;

export type DishIconName = keyof typeof DISH_ICONS;
