import config from './config';
import app from './app';

const server = async () => {
    try {
        app.listen(config.PORT);
        console.log(`[OK] CRON SERVICE RUNNING ON PORT ${config.PORT}`);

    } catch (err) {
        console.error('ERROR WITH THE SERVER INITIALIZATION', err);
    };
};

server();

/* Evita que la aplicación se cierre si hay errores no manejados */
process.on('unhandledRejection', () => { });