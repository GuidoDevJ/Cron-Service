import dotenv from 'dotenv';
import { IEnvs } from '../interfaces/environment.interfaces';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFileMap: { [key: string]: string } = {
  development: '.env.development',
  qa: '.env.qa',
  release: '.env.release',
  production: '.env',
};

const confPath = envFileMap[process.env.NODE_ENV] || '.env.development';

const envFound = dotenv.config({ path: confPath });
if (!envFound) throw new Error("Couldn't find .env file ");

export default <IEnvs>{
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  DB_URIs: {
    agrocarteira: process.env.DB_URI_AGROCARTEIRA,
  },
  services: {
    apiGateway: process.env.URL_GATEWAY,
    payment: process.env.URL_PAYMENT_SERVICE,
  },
};
