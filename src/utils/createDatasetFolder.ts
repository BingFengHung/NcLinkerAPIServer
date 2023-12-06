import fs from 'fs';
import path from 'path';

const fullPath = path.join(__dirname, "../data")

try {
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath);
  } else {
    console.log(`資料夾 '${fullPath}' 已經存在。`);
  }
} catch (err) {
  console.error(`創建資料夾時出錯：${err}`);
}

export {}