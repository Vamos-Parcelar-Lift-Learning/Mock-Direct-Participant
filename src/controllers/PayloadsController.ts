import { Request, Response } from 'express';
import { getMongoRepository } from 'typeorm';

import Payload from '../schemas/Payload';
import AppError from '../errors/AppError';
import { sign } from '../utils/keystore/sign.js';

import ORMOrderRepository from '../repositories/implementations/ORMOrderRepository';
import ORMPayloadRepository from '../repositories/implementations/ORMPayloadRepository';

import ShowOrderService from '../services/ShowOrderService';
import CreateOrderService from '../services/CreateOrderService';
import ShowPayloadService from '../services/ShowPayloadService';

export default class StoresController {
  // public async show(request: Request, response: Response): Promise<Response> {
  //   const { id } = request.params;

  //   const payloadsRepository = getMongoRepository(Payload, 'mongo');

  //   try {
  //     const payload = await payloadsRepository.findOne(id);

  //     if (!payload) {
  //       throw new AppError('Payload not found.', 404);
  //     }

  //     const signed = await sign(payload);

  //     return response.json(signed);
  //   } catch {
  //     throw new AppError('Id out of expected format.', 400);
  //   }
  // }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const payloadRepository = new ORMPayloadRepository();
    const payloadService = new ShowPayloadService(payloadRepository);

    const payload = await payloadService.execute(id);

    return response.status(200).json(payload);
  }
}
