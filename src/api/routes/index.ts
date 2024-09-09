import { NextFunction, Router, Request, Response } from "express";

export default () => {
    const app = Router();
    app.use('*', (req: Request, res: Response, next: NextFunction) => {
        res.status(404).json('NOT FOUND');
    });
    return app;
};