import fs from 'node:fs';
const required = [
  'README.md',
  'course/course-manifest.json',
  'beautiful-ai/deck-manifest.json',
  'business/business-model.md',
  'revenue/pricing-plan.md',
  'marketing/landing-page-copy.md',
  'platform/app-integration/course-app-contract.md',
  'dist/course-index.json'
];
const missing = required.filter((file) => !fs.existsSync(file));
if (missing.length) {
  console.error(JSON.stringify({ status: 'FAIL', missing }, null, 2));
  process.exit(1);
}
const manifest = JSON.parse(fs.readFileSync('course/course-manifest.json', 'utf8'));
const missingModules = manifest.modules.filter((id) => !fs.existsSync(`course/modules/${id}.md`));
if (missingModules.length) {
  console.error(JSON.stringify({ status: 'FAIL', missingModules }, null, 2));
  process.exit(1);
}
console.log(JSON.stringify({ status: 'PASS', modules: manifest.modules.length }, null, 2));
