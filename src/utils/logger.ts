import { getDateTime } from "@macrointell/todoagro-shared";
import fs from 'fs';
import path from 'path';

const logFilePath = path.join(__dirname, '../healthCheckLogs.txt');

export const writeLog = (message: string) => {
    const dateNow = getDateTime();
    const logMessage = `${dateNow} - ${message}\n`;
    fs.appendFileSync(logFilePath, logMessage, 'utf8');
};