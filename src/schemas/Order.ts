import {
  Column,
  ObjectID,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
  Double,
} from 'typeorm';

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
  items: Object[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Order;
