import { getMongoRepository, Double } from 'typeorm';
import { Encoder } from '@nuintun/qrcode';

import Order from '../schemas/Order';
import Payload from '../schemas/Payload';

interface Item {
  item_title: string;
  quantity: number;
  unit_price: Double;
}

interface Request {
  buyer: {
    cpf: string;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
  };
  items: Item[];
  order_ref: string;
  total: Double;
  wallet: string;
  callback_url: string;
}

interface IResponse {
  order_id: string;
  qrcode: string;
  qr_code_text: string;
  status: string;
}

class CreateUserService {
  public async execute(data: Request): Promise<IResponse> {
    const ordersRepository = getMongoRepository(Order, 'mongo');
    const payloadsRepository = getMongoRepository(Payload, 'mongo')

    const store = ordersRepository.create({
      external_id: data.order_ref,
      items: data.items,
      paid_amount: data.total,
      status: 'pending',
      total_order: data.total,
      wallet: data.wallet,
      callback_url: data.callback_url,
    });

    const { id: order_id, status } = await ordersRepository.save(store);

    const today = new Date();
    today.setHours(today.getHours() + 1);

    const payload = payloadsRepository.create({
      calendario: {
        recebivelAposVencimento: false,
        expiracao: today
      },
      devedor: {
        cpf: data.buyer.cpf,
        nome: `${data.buyer.first_name} ${data.buyer.last_name}`
      },
      valor: {
        original: data.total,
      },
      chave: '30.322.074/0001-05',
      txId: String(Math.floor(Math.random() * 100000000000000000000000000000000000)),
      versao: '1.0.0',
    })

    const { id } = await payloadsRepository.save(payload);

    const url = `${process.env.URL_PAYLOAD}/${id}`
    console.log('urlEnv', url)

    const qrcode = new Encoder();

    qrcode.write(url);
    qrcode.make();

    return {
      order_id: (order_id as unknown) as string,
      qrcode: qrcode.toDataURL(5, 5),
      qr_code_text: url,
      status
    };
  }
}

export default CreateUserService;
