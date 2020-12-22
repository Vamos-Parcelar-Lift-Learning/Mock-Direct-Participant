import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
  ObjectID,
} from 'typeorm';
import { Double } from 'mongodb';
import Item from './Item';

@Entity('orders')
class Order {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  wallet: string;

  @Column()
  external_id: string;

  @Column()
  status: string;

  @Column()
  paid_amount: Double;

  @Column()
  total_order: Double;

  @Column()
  callback_url: string;

  @Column()
  items: Item[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Order;
