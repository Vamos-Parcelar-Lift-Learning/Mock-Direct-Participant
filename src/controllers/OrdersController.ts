import { Request, Response } from 'express';
import { getMongoRepository } from 'typeorm';

import Order from '../schemas/Order';
import CreateOrderService from '../services/CreateOrderService';
import AppError from '../errors/AppError';

export default class StoresController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createOrder = new CreateOrderService();

    const order = await createOrder.execute(request.body);

    return response.json({...order});
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const ordersRepository = getMongoRepository(Order, 'mongo');

    try {
      const order = await ordersRepository.findOne(id);

      if (!order) {
        throw new AppError('Order not found.', 404);
      }

      return response.json(order);
    } catch {
      throw new AppError('Id out of expected format.', 400);
    }
  }
}
