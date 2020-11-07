const fs = require("fs");
const path = 'img/favicons';

let files = fs.readdirSync(path);
let template = files.map(file => `<img src="${path}/${file}" width="24"></img>`);
fs.writeFileSync('template.txt', template.join('\n'));
