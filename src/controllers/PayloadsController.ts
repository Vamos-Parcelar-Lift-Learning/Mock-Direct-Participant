import { Request, Response } from 'express';
import { getMongoRepository } from 'typeorm';

import Payload from '../schemas/Payload';
import AppError from '../errors/AppError';
import { sign } from '../utils/keystore/sign';

export default class StoresController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const payloadsRepository = getMongoRepository(Payload, 'mongo');

    try {
      const payload = await payloadsRepository.findOne(id);

      if (!payload) {
        throw new AppError('Payload not found.', 404);
      }

      const signed = await sign(payload);

      return response.json(signed);
    } catch {
      throw new AppError('Id out of expected format.', 400);
    }
  }
}
