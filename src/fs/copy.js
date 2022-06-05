import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

function catapultError(msg) {
    throw new Error(msg);
}

export const copy = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const dirCopyTo = path.join(__dirname, 'files_copy');
    const dirCopyFrom = path.join(__dirname, 'files');
    const errorMessage = 'FS operation failed';
    const dirCopyToCheck = await fs.promises.access(dirCopyTo).then(() => true).catch(() => false);
    const dirCopyFromCheck = await fs.promises.access(dirCopyFrom).then(() => true).catch(() => false);
    if(!dirCopyToCheck && dirCopyFromCheck) {
        await fs.promises.mkdir(dirCopyTo);
        const files = await fs.promises.readdir(dirCopyFrom);
        files.map(async (file) => {
            await fs.promises.copyFile(path.join(dirCopyFrom, file),path.join(dirCopyTo, file));
        })

    } else {
        catapultError(errorMessage);
    }
};

await copy();