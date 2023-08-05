import fs from 'fs';
function randomPart(src, qty) {
    return "".concat(src).concat(Math.floor(Math.random() * qty + 1)
        .toString()
        .padStart(2, "0"));
}
var parts = {
    bg: 'base/Bg',
    body: 'base/Body',
    accessories: 'accessories/Accessory',
    eyes: 'eyes/Eye',
    faces: 'faces/Face',
    hairs: 'hairs/Hair',
    mouths: 'mouths/Mouth',
    outfits: 'outfits/Outfit',
    // facialHairs: 'facial-hair/FacialHair' TODO: Search for missing facial-hair
};
export function getParts(part, name, itemsAv) {
    if (name === void 0) { name = ''; }
    if (itemsAv === void 0) { itemsAv = 0; }
    try {
        var path = './dist/src/parts/' + (parts[part].includes('base/')
            ? parts[part]
            : name ? part + '/' + name : randomPart(parts[part], itemsAv)) + '.svg';
        var partSvg = fs.readFileSync(path, 'utf8');
        return partSvg.replace('fill="none"', "fill=\"none\" class=\"avatar-part ".concat(part, "\""));
    }
    catch (err) {
        console.error(err);
    }
}
