import express, {Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import Logger from './src/logger/logger';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(port,()=>{
    Logger.info(`[server]: Server is running at http://localhost:${port}`);
})