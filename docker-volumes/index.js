import { log } from 'console';
import fs from 'fs';

const path = '/data/log.txt';
setInterval(() => {
    const logMessage = `Log message at ${new Date().toISOString()}\n`; // Create new Date object
    fs.appendFileSync(path, logMessage);
    console.log(`Logged: ${logMessage}`);
}, 5000);
