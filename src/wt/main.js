import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

export const performCalculations = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const workerPath = path.join(__dirname, 'worker.js');
    const cpuData = os.cpus().length;
    const runWorkerThread = (data) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(workerPath);
            worker.postMessage(data);
            worker.on('message', resolve);
            worker.on('error', reject);
        })
    }
    const resultArray = [];
    for(let i = 0; i < cpuData; i++) {
        resultArray.push(runWorkerThread(10 + i))
    }
    const result = await Promise.all(resultArray);
    console.log(result);
};

await performCalculations();