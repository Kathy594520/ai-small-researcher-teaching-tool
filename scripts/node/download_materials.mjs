import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, '..', '..');
const baseDir = path.join(projectRoot, 'materials');

const items = [
  {
    name: '?唾?撟潮?餈',
    file: 'Prionailurus_bengalensis_in_Taiwan_03.jpg',
    source: 'File:Prionailurus bengalensis in Taiwan 03.jpg',
    kind: 'commons',
  },
  {
    name: '?唾???',
    file: 'Leopard_Cat_Prionailurus_bengalensis_borneoensis_7136074909.jpg',
    source: 'File:Leopard Cat (Prionailurus bengalensis borneoensis) (7136074909).jpg',
    kind: 'commons',
  },
  {
    name: '摰嗉?撠',
    file: 'Domestic_cat_felis_catus_stare.jpg',
    source: 'File:Domestic cat felis catus stare.jpg',
    kind: 'commons',
  },
  {
    name: '?豢??琿蝷箸?',
    file: 'Wildlife_Technician_Andrew_checks_trail_cameras.jpg',
    source: 'File:Wildlife Technician Andrew checks trail cameras for any signs of wildlife passing through Igloo Creek Campground on Thursday (a3e8f906-2f06-431c-a76c-c9927f230a58).JPG',
    kind: 'commons',
  },
  {
    name: '璉脣?楝',
    file: 'Woods_landscape_road_loyalsock_state_forest_163703.jpg',
    source: 'File:Woods-landscape-road-loyalsock-state-forest-163703.jpg',
    kind: 'commons',
  },
  {
    name: '?蝛輯??楝',
    file: 'Bear_family_crossing_road.jpg',
    source: 'File:Bear family crossing road.jpg',
    kind: 'commons',
  },
  {
    name: '????豢??',
    file: 'pixy_trail_camera_5566971.jpg',
    source: 'https://pixy.org/5566971/',
    kind: 'pixy',
  },
  {
    name: '???蝛輯?璅內',
    file: 'pixy_wildlife_crossing_6379990.jpg',
    source: 'https://pixy.org/6379990/',
    kind: 'pixy',
  },
];

async function fetchBuffer(url) {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const res = await fetch(url, {
      redirect: 'follow',
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
      },
    });
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      return { buf, contentType: res.headers.get('content-type') || '' };
    }
    if (res.status !== 429 || attempt === 3) {
      throw new Error(`HTTP ${res.status} ${res.statusText}`);
    }
    await new Promise((r) => setTimeout(r, 2500 * attempt));
  }
}

async function run() {
  await mkdir(baseDir, { recursive: true });
  const manifest = [];

  for (const item of items) {
    try {
      let imageUrl = item.source;
    if (item.kind === 'pixy') {
      const pageRes = await fetch(item.source, {
        redirect: 'follow',
        headers: {
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
          },
        });
        if (!pageRes.ok) throw new Error(`page HTTP ${pageRes.status}`);
        const html = await pageRes.text();
        const match = html.match(/<meta property="og:image" content="([^"]+)"/i);
        if (!match) throw new Error('missing og:image');
        imageUrl = match[1].startsWith('//') ? `https:${match[1]}` : match[1];
      } else if (item.kind === 'commons') {
        const apiUrl =
          'https://commons.wikimedia.org/w/api.php?action=query&titles=' +
          encodeURIComponent(item.source) +
          '&prop=imageinfo&iiprop=url&iiurlwidth=1200&format=json&origin=*';
        const apiRes = await fetch(apiUrl, {
          headers: {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
          },
        });
        if (!apiRes.ok) throw new Error(`api HTTP ${apiRes.status}`);
        const json = await apiRes.json();
        const page = Object.values(json?.query?.pages || {})[0];
        const ii = page?.imageinfo?.[0];
        imageUrl = ii?.thumburl || ii?.url;
        if (!imageUrl) throw new Error('missing image url');
      }

      const { buf, contentType } = await fetchBuffer(imageUrl);
      const outPath = path.join(baseDir, item.file);
      await writeFile(outPath, buf);
      manifest.push({ ...item, imageUrl, contentType, status: 'ok' });
      console.log(`OK ${item.file}`);
      await new Promise((r) => setTimeout(r, 1200));
    } catch (error) {
      manifest.push({ ...item, status: `failed: ${error.message}` });
      console.log(`FAIL ${item.file}: ${error.message}`);
    }
  }

  await writeFile(path.join(baseDir, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

