import fs from 'fs';
import path from 'path';

export default class Responser { 
  fullPath: string;

  constructor(filename: string) {
    this.fullPath = path.join(__dirname, `../data/${filename}.json`);
    console.log(this.fullPath);
  }

  public load() { 
    const data = fs.readFileSync(this.fullPath, 'utf8'); 
    return JSON.parse(data);
  }
  
  public save<T>(data: T) { 
    fs.writeFileSync(this.fullPath, JSON.stringify(data, null, 2)) 
    return true;
  }
} 