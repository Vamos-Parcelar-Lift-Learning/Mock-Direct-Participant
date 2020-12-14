import Payload from '../schemas/Payload';
import AppError from '../errors/AppError';
import IPayloadRepository from '../repositories/IPayloadRepository';
import { sign } from '../utils/keystore/sign.js';

class ShowPayloadService {
  private payloadRepository: IPayloadRepository;

  constructor(payloadRepository: IPayloadRepository) {
    this.payloadRepository = payloadRepository;
  }

  public async execute(orderId: string): Promise<string> {
    const payload = await this.payloadRepository.findById(orderId);

    if (!payload) {
      throw new AppError('Payload not found.', 404);
    }

    const signed = await sign(payload);

    return signed;
  }
}

export default ShowPayloadService;
