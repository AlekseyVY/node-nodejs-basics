import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const dir = path.join(__dirname, '/files/fileToRead.txt')
    const readStream = fs.createReadStream(dir,{encoding: 'utf8'});
    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

await read();