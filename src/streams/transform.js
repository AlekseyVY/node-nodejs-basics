import readline from "readline";
import { Transform } from "stream";

export const transform = async () => {
    const rl = readline.createInterface({ input: process.stdin });
    const reverse = new Transform({
        transform(chunk) {
            const result = chunk.split('').reverse().join('');
            process.stdout._write(`${result}\n`, 'utf-8', null);
        }
    })
    rl.on('line', (input) => {
        reverse._transform(input, 'utf-8', null)
    })
};

await transform();