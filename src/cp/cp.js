import { fork } from 'node:child_process';
import path from "path";
import {fileURLToPath} from "url";

export const spawnChildProcess = async (args) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const dir = path.join(__dirname, '/files/script.js')
    const argsToPass = args.slice(2);
    const controller = new AbortController();
    const { signal } = controller;
    const child = fork(dir, argsToPass, { signal });
    child.send(args)
    child.on('message', (data) => {
        console.log(data)
    })
};

await spawnChildProcess(process.argv);