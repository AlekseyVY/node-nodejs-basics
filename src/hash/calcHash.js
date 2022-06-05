import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import * as hash from 'crypto';

function catapultError(msg) {
    throw new Error(msg);
}

export const calculateHash = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const dir = path.join(__dirname, '/files/fileToCalculateHashFor.txt');
    const errorMessage = 'FS operation failed';
    const encoding = 'utf8';
    const dirExistsCheck = await fs.promises.access(dir).then(() => true).catch(() => false);
    dirExistsCheck ? await ( async () => {
        const content = await fs.promises.readFile(dir, encoding)
        const result = hash.createHash('sha256').update(content).digest('hex')
        console.log(result);
    })() : catapultError(errorMessage);
};

await calculateHash();