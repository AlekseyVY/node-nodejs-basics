export const parseArgs = () => {
    const pattern = /^(--)\w+/;
    const arr = Object.entries(process.argv);
    const length = process.argv.length;
    for(let i = 0; i < length; i++) {
        const element = arr[i][1];
        const status = pattern.test(element);
        const key = element.slice(2, element.length)
        status ? console.log(`${key} is ${arr[i + 1][1]}`) : null;
    }
};

parseArgs();