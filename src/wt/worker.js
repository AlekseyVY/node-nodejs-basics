import { parentPort } from 'worker_threads';

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    parentPort.on('message', (data) => {
        try {
            parentPort.postMessage({ status: 'resolved', data: nthFibonacci(data) })
        } catch(err) {
            parentPort.postMessage({ status: 'error', data: null })
        }
    })
};

sendResult()