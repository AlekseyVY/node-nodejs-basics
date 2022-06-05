export const parseEnv = () => {
    const pattern = /^(RSS_)\w+/;
    for(const [key, value] of Object.entries(process.env)) {
        const status = pattern.test(key);
        status ? console.log(`${key}=${value}`) : null;
    }
};

parseEnv();