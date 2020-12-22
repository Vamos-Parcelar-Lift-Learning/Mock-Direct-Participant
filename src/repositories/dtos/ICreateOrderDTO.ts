import { Double } from 'mongodb';

interface IItem {
  item_title: string;
  quantity: number;
  unit_price: Double;
}

class ICreateOrder {
  external_id: string;

  items: IItem[];

  paid_amount: Double;

  status: string;

  total_order: Double;

  wallet: string;

  callback_url: string;
}

export default ICreateOrder;
