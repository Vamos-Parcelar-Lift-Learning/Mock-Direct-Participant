import Order from '../schemas/Order';
import AppError from '../errors/AppError';
import IOrderRepository from '../repositories/IOrderRepository';

class ShowOrderService {
  private orderRepository: IOrderRepository;

  constructor(orderRepository: IOrderRepository) {
    this.orderRepository = orderRepository;
  }

  public async execute(orderId: string): Promise<Order> {
    const order = await this.orderRepository.findById(orderId);

    if (!order) {
      throw new AppError('Order não encontrada.', 404);
    }

    return order;
  }
}

export default ShowOrderService;
