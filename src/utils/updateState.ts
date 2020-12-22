/* eslint-disable @typescript-eslint/camelcase */
import axios from 'axios';
import { getMongoRepository, ObjectID } from 'typeorm';
import Order from '../schemas/Order';

async function updateState(order_id: ObjectID) {
  const orderRepository = getMongoRepository(Order, 'mongo');
  try {
    const order = await orderRepository.findOne(order_id);
    console.log('order = ', order);
    if (!order) {
      console.log('Não foi encontrada order para atualizar o status');
      return;
    }

    order.status = 'approved';
    order.updated_at = new Date();
    await orderRepository.save(order);
    console.log(`Status da order ${order_id} alterado para aprovado `);

    console.log('Requisitando POST em callback_url', order.callback_url);
    await axios.post(order.callback_url, { order_id });
    console.log('Requisição POST feita no backend com sucesso');
  } catch (error) {
    console.log(error);
  }
}

export default updateState;
