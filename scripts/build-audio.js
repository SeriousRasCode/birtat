// Regenerate the fixed offline prompts: node scripts/build-audio.js
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const dict = JSON.parse(fs.readFileSync(path.join(root, 'module/i18n/am.json'), 'utf8'));
const output = path.join(root, 'module/audio/am');
fs.mkdirSync(output, { recursive: true });

async function savePrompt(name, text) {
  const url = new URL('https://translate.google.com/translate_tts');
  url.searchParams.set('ie', 'UTF-8');
  url.searchParams.set('client', 'tw-ob');
  url.searchParams.set('tl', 'am');
  url.searchParams.set('q', text);
  const response = await fetch(url);
  if (!response.ok || !response.headers.get('content-type')?.includes('audio/')) {
    throw new Error(`Audio generation failed for ${name}: HTTP ${response.status}`);
  }
  fs.writeFileSync(path.join(output, `${name}.mp3`), Buffer.from(await response.arrayBuffer()));
}

(async () => {
  for (const step of ['lang', 'name', 'phone', 'idRoute', 'support']) {
    const data = dict.steps[step];
    const options = data.options ? data.options.map((option, index) => `${index + 1}: ${option}`).join('. ') : '';
    const finish = step === 'support' ? `. 9: ${dict.finish}` : '';
    await savePrompt(step, `${data.heading}. ${options}${finish}`);
  }
  await savePrompt('done', dict.done.heading);
})().catch((error) => { console.error(error); process.exitCode = 1; });
