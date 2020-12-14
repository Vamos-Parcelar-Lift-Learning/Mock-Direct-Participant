import { Request, Response } from 'express';
import ORMPayloadRepository from '../repositories/implementations/ORMPayloadRepository';

import ShowPayloadService from '../services/ShowPayloadService';

export default class StoresController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const payloadRepository = new ORMPayloadRepository();
    const payloadService = new ShowPayloadService(payloadRepository);

    const payload = await payloadService.execute(id);

    return response.status(200).json(payload);
  }
}
