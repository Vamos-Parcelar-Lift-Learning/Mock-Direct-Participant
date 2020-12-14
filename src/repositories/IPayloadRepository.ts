import Payload from '../schemas/Payload';
import ICreatePayload from './dtos/ICreatePayloadDTO';

export default interface IPayloadRepository {
  save(order: Payload): Promise<Payload>;
  create(createOrder: ICreatePayload): Promise<Payload>;
}
