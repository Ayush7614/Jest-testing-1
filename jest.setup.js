/**
 * @jest-environment jsdom
 */

global.window = window;
window.restrictedElements = [];
window.embed = false;
window['Array'] = Array;
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();
