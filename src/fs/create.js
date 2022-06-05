import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

function catapultError(msg) {
    throw new Error(msg);
}

export const create = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const dir = path.join(__dirname, '/files/fresh.txt')
    const message = 'I am fresh and young';
    const errorMessage = 'FS operation failed';
    const status = await fs.promises.access(dir).then(() => true).catch(() => false);
    status ? catapultError(errorMessage) : await fs.promises.writeFile(dir, message);
};

await create();