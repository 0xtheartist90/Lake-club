import sharp from 'sharp';

const SRC = 'public/lakeclub_logo.png';
const SLATE = { r: 66, g: 89, b: 105, alpha: 1 }; // #425969

// The mark sits in the top square of the 277x360 logo; "LAKE CLUB" text is below it.
// Crop the mark, trim transparent edges, then recolor it to cream/white.
const markSlate = await sharp(SRC)
    .extract({ left: 0, top: 0, width: 277, height: 277 })
    .trim()
    .toBuffer();

const m = await sharp(markSlate).metadata();
const alpha = await sharp(markSlate).ensureAlpha().extractChannel(3).toBuffer();
const markWhite = await sharp({
    create: { width: m.width, height: m.height, channels: 3, background: { r: 244, g: 240, b: 231 } }
})
    .joinChannel(alpha)
    .png()
    .toBuffer();

async function build(size, pad, radius, out) {
    const inner = size - pad * 2;
    const mk = await sharp(markWhite).resize({ width: inner, height: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
    const mask = Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" ry="${radius}"/></svg>`);
    await sharp({ create: { width: size, height: size, channels: 4, background: SLATE } })
        .composite([{ input: mk, gravity: 'center' }, { input: mask, blend: 'dest-in' }])
        .png()
        .toFile(out);
    console.log('wrote', out, size + 'px');
}

await build(512, 96, 112, 'src/app/icon.png');
await build(180, 30, 40, 'src/app/apple-icon.png');
