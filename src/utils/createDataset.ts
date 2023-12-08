import fs from 'fs';
import path from 'path';
import { basePath } from './basePath';

export default function create<T>(filename: string, data: T) { 
  const filepath = `data/${filename}` 
  const fullPath = path.join(basePath, filepath);
  if (!fs.existsSync(fullPath)) { 
    fs.writeFileSync(fullPath, JSON.stringify(data, null, 2)) 
  } 
}