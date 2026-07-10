import fs from 'node:fs';
import path from 'node:path';
const manifest = JSON.parse(fs.readFileSync('course/course-manifest.json', 'utf8'));
const modules = manifest.modules.map((id) => {
  const file = `course/modules/${id}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const title = content.match(/^#\s+(.+)$/m)?.[1] ?? id;
  return { id, title, file };
});
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/course-index.json', JSON.stringify({ ...manifest, modules }, null, 2));
console.log(`Built dist/course-index.json with ${modules.length} modules`);
