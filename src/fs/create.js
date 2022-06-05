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
    fs.access(dir, (error) => error
        ? fs.writeFile(dir, message, () => true)
        : catapultError(errorMessage))
};

await create();