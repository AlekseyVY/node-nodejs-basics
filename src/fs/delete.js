import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

function catapultError(msg) {
    throw new Error(msg);
}

export const remove = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const dir = path.join(__dirname, '/files/fileToRemove.txt');
    const errorMessage = 'FS operation failed';
    const status = await fs.promises.access(dir).then(() => true).catch(() => false);
    status ? await fs.promises.unlink(dir) : catapultError(errorMessage);
};

await remove();