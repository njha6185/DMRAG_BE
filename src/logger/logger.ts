import pino from 'pino';
import pinoCaller from 'pino-caller';

const Logger : pino.Logger = pinoCaller( pino({
    level: process.env.LOG_LEVEL || 'info',
    redact: ['request.headers.authorization'],
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: 'SYS:standard',
        }
    },
}) );

export default Logger;