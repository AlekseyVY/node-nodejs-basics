import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import readline from "readline";

export const write = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const dir = path.join(__dirname, '/files/fileToWrite.txt')
    const rl = readline.createInterface({ input: process.stdin });
    const writeStream = fs.createWriteStream(dir, {flags: 'a'});
    rl.on('line', (input) => {
        console.log(input)
        writeStream.write(input);
        writeStream.write('\n');
    })

};

await write();