import 'reflect-metadata'
import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import {AppRoutes} from '@routes/index.routes';
//import AppError from '@errors/AppError';
import { errors } from 'celebrate';

const PORT = 3000

const app = express();

app.use(cors());
app.use(express.json())

app.use(AppRoutes)
app.use(errors())
//middleware para tratar erros
/* app.use(AppError) */

app.listen(PORT, () =>{
  console.log(`Server running at port ${PORT}`)
})
