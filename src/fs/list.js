import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

function catapultError(msg) {
    throw new Error(msg);
}


export const list = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const dir = path.join(__dirname, '/files');
    const errorMessage = 'FS operation failed';
    const dirExistsCheck = await fs.promises.access(dir).then(() => true).catch(() => false);
    dirExistsCheck ? await (async () => {
        const files = await fs.promises.readdir(dir);
        files.forEach((file) => console.log(file));
    })() : catapultError(errorMessage);
};

await list();