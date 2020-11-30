import { Request, Response, NextFunction } from 'express';

import AppError from '../errors/AppError';
import authConfig from '../config/auth';

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;
  console.log('algo', authHeader);

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  // const [, token] = authHeader.split(' ');
  // console.log('token', token);
  console.log('secret', authConfig.secret)

  // if (token !== authConfig.secret) throw new AppError('Inavlid token', 401)
  if (authHeader !== authConfig.secret) throw new AppError('Inavlid token', 401)

  return next();
}
