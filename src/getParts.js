const fs = require('fs');

function randomPart(src, qty) {
    return `${src}${Math.floor(Math.random() * qty + 1)
      .toString()
      .padStart(2, "0")}`;
  }

const parts = {
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

function getParts(part, name = '', itemsAv = 0) {
    try {
        let path = './src/parts/' + (
            parts[part].includes('base/')
            ? parts[part]
            : name ? part+'/'+name : randomPart(parts[part], itemsAv)) + '.svg';
    
        const partSvg = fs.readFileSync(path, 'utf8');
        return partSvg.replace('fill="none"', `fill="none" class="avatar-part ${part}"`);
    } catch(err) { 
        console.error(err);
    }
}

module.exports = { getParts };