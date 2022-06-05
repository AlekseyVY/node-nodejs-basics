import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

function catapultError(msg) {
    throw new Error(msg);
}

export const rename = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const dir = path.join(__dirname, '/files')
    const errorMessage = 'FS operation failed';
    const renameFileFrom = path.join(dir, 'wrongFilename.txt');
    const renameFileTo = path.join(dir, 'properFilename.md');
    const renameFileToCheck = await fs.promises.access(renameFileTo).then(() => true).catch(() => false);
    const renameFileFromCheck = await fs.promises.access(renameFileFrom).then(() => true).catch(() => false);
    if(renameFileFromCheck && !renameFileToCheck) {
        await fs.promises.rename(renameFileFrom, renameFileTo);
    } else {
        catapultError(errorMessage);
    }
};

await rename();