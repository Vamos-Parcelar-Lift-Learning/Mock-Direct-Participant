import 'reflect-metadata';
import 'express-async-errors';

import cors from 'cors';
import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';

import routes from './routes';
import AppError from './errors/AppError';

import './database';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  });
});

app.listen(process.env.PORT || 3334, () => {
  console.log('Server started on port 3334!');
});
