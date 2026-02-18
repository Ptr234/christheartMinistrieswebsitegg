const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

async function optimizeEvent(eventId = 'november-blessing') {
  // Resolve repo root relative to this script file so the script works from any cwd
  const repoRoot = path.resolve(__dirname, '..');
  const base = path.join(repoRoot, 'frontend', 'public', 'events', eventId);
  const manifestPath = path.join(base, 'manifest.json');
  try {
    const manifestRaw = await fs.readFile(manifestPath, 'utf8');
    const files = JSON.parse(manifestRaw);
    const outFiles = [];
    await fs.mkdir(path.join(base, 'optimized'), { recursive: true });
    for (const f of files) {
      const src = path.join(base, f);
      const name = path.parse(f).name;
      const outName = `${name}.webp`;
      const out = path.join(base, 'optimized', outName);
      try {
        await sharp(src).resize({ width: 1400 }).webp({ quality: 82 }).toFile(out);
        outFiles.push(path.posix.join('optimized', outName));
        console.log('optimized', f, '->', outName);
      } catch (err) {
        console.warn('failed optimizing', f, err.message);
      }
    }
    if (outFiles.length) {
      await fs.writeFile(manifestPath, JSON.stringify(outFiles, null, 2), 'utf8');
      console.log('Wrote optimized manifest with', outFiles.length, 'files');
    } else {
      console.log('No optimized files generated');
    }
  } catch (err) {
    console.error('optimizeEvent error:', err.message);
    process.exit(1);
  }
}

const eventArg = process.argv[2] || 'november-blessing';
optimizeEvent(eventArg).catch((e) => { console.error(e); process.exit(1); });
