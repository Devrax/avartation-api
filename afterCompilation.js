import fs from 'fs';

fs.cp('./src/parts', './dist/src/parts', { recursive: true }, (err) => err && console.error(err));