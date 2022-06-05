import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

function catapultError(msg) {
    throw new Error(msg);
}

export const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const dir = path.join(__dirname, '/files/fileToRead.txt');
    const errorMessage = 'FS operation failed';
    const encoding = 'utf8';
    const dirExistsCheck = await fs.promises.access(dir).then(() => true).catch(() => false);
    dirExistsCheck ? await ( async () => {
        const content = await fs.promises.readFile(dir, encoding);
        console.log(content);
    })() : catapultError(errorMessage);
};

await read();