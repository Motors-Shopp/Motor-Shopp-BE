import 'reflect-metadata'
import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import {AppRoutes} from '@routes/index.routes';
import { errorMiddleware } from '@middlewares/error.middleware';

const app = express();

app.use(cors());
app.use(express.json())

app.use(AppRoutes)
app.use(errorMiddleware);

export default app
