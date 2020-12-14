/* eslint-disable @typescript-eslint/camelcase */
import { MongoRepository, getMongoRepository } from 'typeorm';
import IOrderRepository from '../IOrderRepository';
import Order from '../../schemas/Order';
import ICreateUserDTO from '../dtos/ICreateOrderDTO';

class ORMOrderRepository implements IOrderRepository {
  private ormRepository: MongoRepository<Order>;

  constructor() {
    this.ormRepository = getMongoRepository(Order, 'mongo');
  }

  public async save(order: Order): Promise<Order> {
    return this.ormRepository.save(order);
  }

  public async create(createOrder: ICreateUserDTO): Promise<Order> {
    const created_at = new Date();
    const order = this.ormRepository.create({
      ...createOrder,
      created_at,
      updated_at: created_at,
    });

    await this.ormRepository.save(order);

    return order;
  }
}

export default ORMOrderRepository;
