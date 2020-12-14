/* eslint-disable @typescript-eslint/camelcase */
import { MongoRepository, getMongoRepository } from 'typeorm';
import IPayloadRepository from '../IPayloadRepository';
import Payload from '../../schemas/Payload';
import ICreatePayload from '../dtos/ICreatePayloadDTO';

class ORMOrderRepository implements IPayloadRepository {
  private ormRepository: MongoRepository<Payload>;

  constructor() {
    this.ormRepository = getMongoRepository(Payload, 'mongo');
  }

  public async save(payload: Payload): Promise<Payload> {
    return this.ormRepository.save(payload);
  }

  public async create(createPayload: ICreatePayload): Promise<Payload> {
    const payload = this.ormRepository.create({
      ...createPayload,
    });

    await this.ormRepository.save(payload);

    return payload;
  }
}

export default ORMOrderRepository;
