import path from 'path';

export let basePath: string;

if (__dirname.includes('snapshot')) {
  // 如果在 pkg 打包環境中，__dirname 會包含 '/snapshot'
  basePath = path.dirname(process.execPath);
} else {
  // 在開發環境中直接使用 __dirname
  basePath = require.main?.path!;
}

console.log('----')
console.log(process.execPath);
console.log(process.cwd());
console.log(require.main?.path);
console.log('----')
