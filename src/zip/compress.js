import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from "zlib";

export const compress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const fileFrom = path.join(__dirname, '/files/fileToCompress.txt');
    const fileTo = path.join(__dirname, '/files/archive.gz');
    const readStream = fs.createReadStream(fileFrom,{encoding: 'utf8'});
    const writeStream = fs.createWriteStream(fileTo);
    const gzip = zlib.createGzip();
    await readStream.pipe(gzip).pipe(writeStream);
};

await compress();