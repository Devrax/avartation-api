import fs from 'fs';

function randomPart(src: string, qty: number) {
    return `${src}${Math.floor(Math.random() * qty + 1)
      .toString()
      .padStart(2, "0")}`;
  }

type Parts = {
    bg: string;
    body: string;
    accessories: string;
    eyes: string;
    faces: string;
    hairs: string;
    mouths: string;
    outfits: string;
    // facialHairs: string; TODO: Search for missing facial-hair
};

const parts: Parts = {
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

export function getParts(part: keyof Parts, name: string | null = '', itemsAv = 0) {
    try {
        let path = './dist/src/parts/' + (
            parts[part].includes('base/')
            ? parts[part]
            : name ? part+'/'+name : randomPart(parts[part], itemsAv)) + '.svg';
    
        const partSvg = fs.readFileSync(path, 'utf8');
        return partSvg.replace('fill="none"', `fill="none" class="avatar-part ${part}"`);
    } catch(err) { 
        console.error(err);
    }
}
