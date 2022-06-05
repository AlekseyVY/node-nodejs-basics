import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from "zlib";

export const decompress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const fileFrom = path.join(__dirname, '/files/archive.gz');
    const fileTo = path.join(__dirname, '/files/fileToCompress.txt');
    const readStream = fs.createReadStream(fileFrom);
    const writeStream = fs.createWriteStream(fileTo);
    const gzip = zlib.createUnzip();
    await readStream.pipe(gzip).pipe(writeStream);
};

await decompress();