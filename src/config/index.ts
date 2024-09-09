import dotenv from "dotenv";
import { IEnvs } from "../interfaces/environment.interfaces";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFileMap: { [key: string]: string } = {
	'development': '.env.development',
	'qa': '.env.qa',
	'release': '.env.release',
	'production': '.env',
};

const confPath = envFileMap[process.env.NODE_ENV] || '.env.development';

const envFound = dotenv.config({ path: confPath });
if (!envFound) throw new Error("Couldn't find .env file ");

export default <IEnvs>{
    PORT: process.env.PORT,
    API_PREFIX: process.env.API_PREFIX,
    services: {
        apiGateway: process.env.URL_GATEWAY,
        auth: process.env.URL_AUTH_SERVICE,
        user: process.env.URL_USER_SERVICE
    },
};