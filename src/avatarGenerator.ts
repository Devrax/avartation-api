import { getParts } from './getParts.js';

type avatarDetail = {
    bg?: string | null;
    body?: string | null;
    hair?: string | null;
    eye?: string | null;
    mouth?: string | null;
    head?: string | null;
    outfit?: string | null;
    accessory?: string | null;
    facialHair?: string | null;
};

export const avatarGenerator = async ({
    bg,
    body,
    hair,
    eye,
    mouth,
    head,
    outfit,
    accessory
}: avatarDetail) => (`
    <style>

.avatar-part {
    position: absolute;
    pointer-events: none;
  }
  
  .bg {
    z-index: 1;
  }
  .body {
    z-index: 2;
  }
  .outfits {
    z-index: 3;
  }
  .faces {
    z-index: 4;
  }
  .hairs {
    z-index: 5;
  }
  .eyes {
    z-index: 6;
  }
  .mouths {
    z-index: 7;
  }
  .facial-hair {
    z-index: 8;
  }
  .accessories {
    z-index: 9;
  }
  
    </style>
    <div id="main-content" style="height: 320px;width:320;background:${bg || 'rgb(252 165 165)'};">
        ${getParts('body', body)}
        ${getParts('hairs', hair, 32)}
        ${getParts('eyes', eye, 6)}
        ${getParts('mouths', mouth, 10)}
        ${getParts('faces', head, 8)}
        ${getParts('outfits', outfit, 25)}
        ${getParts('accessories', accessory, 10)}
    </div>
`)

// ${getParts('facialHairs', facialHair, 8)}
