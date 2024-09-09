import Express, { Request, Response, NextFunction } from 'express';
import cors, { CorsOptions } from 'cors';
import cookieParser from 'cookie-parser';
import routes from './api/routes';
import morgan from 'morgan';
import config from './config';
import { ErrorCreator, ErrorHandler } from '@macrointell/todoagro-shared';
import './cron-jobs/index';

const app = Express();

app.use(Express.json());
const allowedOrigins = [
    config.services.apiGateway,
    config.services.auth,
    config.services.user,
];
const corsOptions: CorsOptions =
    process.env.NODE_ENV === 'development'
        ? {
            credentials: true,
            origin: true,
        }
        : {
            credentials: true,
            origin: allowedOrigins,
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
        };
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(morgan('dev'));
//
app.use(`${config.API_PREFIX}`, routes());
app.use(
    (err: ErrorCreator, req: Request, res: Response, next: NextFunction) => {
        let error = {
            msg: err.msg,
            statusCode: err.statusCode,
            isInternal: err.isInternal,
        };
        if (!err.statusCode) {
            error = ErrorHandler(err);
        };

        return res
            .status(error.statusCode)
            .json({ error: error.msg, isInternal: error.isInternal });
    }
);

export default app;
