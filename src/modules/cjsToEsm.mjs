import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import a from './files/a.json' assert {type: "json"};
import b from './files/b.json' assert {type: "json"};
import { fileURLToPath } from "url";
import('./files/c.js');

const __dirname = fileURLToPath(import.meta.url)
const __filename =  path.dirname(__dirname);

const random = Math.random();
export let unknownObject;
random > 0.5 ? unknownObject = a : unknownObject = b

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});