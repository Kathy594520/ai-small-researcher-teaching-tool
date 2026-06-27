import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..', '..');
const assets = path.join(root, 'routines_offline_assets');
const outHtml = path.join(root, 'routines.html');
const outDesktop = 'C:\\Users\\USER\\Desktop\\routines.html';
const outCss = path.join(root, 'routines.tailwind.css');
const reactProd = path.join(assets, 'react.production.min.js');
const reactDomProd = path.join(assets, 'react-dom.production.min.js');

const html = await fs.readFile(path.join(root, 'routines.offline.html'), 'utf8');
const css = await fs.readFile(outCss, 'utf8');
const react = await fs.readFile(reactProd, 'utf8');
const reactDom = await fs.readFile(reactDomProd, 'utf8');
const app = await fs.readFile(path.join(root, 'routines.app.min.js'), 'utf8');

const escapeScript = (text) => text.replace(/<\/script>/gi, '<\\/script>');

const headTailwindStart = html.indexOf('<!-- Tailwind CSS -->');
const styleStart = html.indexOf('<style>');
const bodyScriptStart = html.indexOf('<script type="text/babel" data-presets="env,react">');
if (headTailwindStart === -1 || styleStart === -1 || bodyScriptStart === -1) {
  throw new Error('Template markers not found in routines.offline.html');
}

const beforeHeadScripts = html.slice(0, headTailwindStart);
const headScriptBlock = `<!-- Tailwind CSS -->\n    <script>${escapeScript(react)}</script>\n    <script>${escapeScript(reactDom)}</script>\n`;
const beforeStyle = html.slice(styleStart, bodyScriptStart);
const afterBodyScript = html.slice(html.indexOf('</script>', bodyScriptStart) + '</script>'.length);
const finalHtml = `${beforeHeadScripts}${headScriptBlock}${beforeStyle}<script>${escapeScript(app)}</script>${afterBodyScript}`;

await fs.writeFile(outHtml, finalHtml, 'utf8');
await fs.writeFile(outDesktop, finalHtml, 'utf8');
console.log(`updated ${outHtml}`);
console.log(`updated ${outDesktop}`);

