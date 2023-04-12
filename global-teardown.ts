import * as fs from 'fs';


async function globalTeardown() {

  var filePath = ['./state.json'];
  for (const file of filePath) {
    fs.unlinkSync(file);
  }
  //var folderPath = 'examples/tests/VisualCompare.spec.ts-snapshots/Visual-compare-1-chromium-win32.png';

  // try {

  //   const files = fs.readdirSync(folderPath);

  //   files.forEach(file => {
  //     const filePath = path.join(folderPath, file);
  //     fs.unlinkSync(filePath);
  //     console.log(`Delete file: ${filePath}`);
  //   });
  // } catch (err) {
  //   console.error(err);
  // }
}
export default globalTeardown;
