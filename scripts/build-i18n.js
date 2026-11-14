const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'module', 'db-signup.js');
const start = '// BEGIN GENERATED TRANSLATIONS (run `node scripts/build-i18n.js` after editing JSON)';
const end = '// END GENERATED TRANSLATIONS';
const translations = {};

for (const lang of ['am', 'en']) {
  translations[lang] = JSON.parse(fs.readFileSync(path.join(root, 'module', 'i18n', `${lang}.json`), 'utf8'));
}

const code = fs.readFileSync(source, 'utf8');
const before = code.indexOf(start);
const after = code.indexOf(end, before);
if (before < 0 || after < 0) throw new Error('Translation markers are missing');

const generated = `${start}\nconst TRANSLATIONS = ${JSON.stringify(translations, null, 2)};\n`;
fs.writeFileSync(source, code.slice(0, before) + generated + code.slice(after));
