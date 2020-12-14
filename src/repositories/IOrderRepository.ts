import Order from '../schemas/Order';
import ICreateOrder from './dtos/ICreateOrderDTO';

export default interface IOrderRepository {
  save(order: Order): Promise<Order>;
  create(createOrder: ICreateOrder): Promise<Order>;
}
