const { getParts } = require('./getParts');

const avatarGenerator = async ({
  bg,
  body,
  hair,
  eye,
  mouth,
  head,
  outfit,
  accessory
}, response) => (`
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
        ${getParts('body', body, undefined, response)}
        ${getParts('hairs', hair, 32, response)}
        ${getParts('eyes', eye, 6, response)}
        ${getParts('mouths', mouth, 10, response)}
        ${getParts('faces', head, 8, response)}
        ${getParts('outfits', outfit, 25, response)}
        ${getParts('accessories', accessory, 10, response)}
    </div>
`)

// ${getParts('facialHairs', facialHair, 8)}

module.exports = { avatarGenerator }