import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';
import { Double, ObjectID } from 'mongodb';
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
  items: Item[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Order;
