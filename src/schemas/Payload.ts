import {
  Column,
  Entity,
  ObjectIdColumn,
} from 'typeorm';
import Calendar from './Calendar';
import Debtor from './Debtor';
import Value from './Value';
import { ObjectID } from 'mongodb';

@Entity('payloads')
class Payload {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  calendario: Calendar;

  @Column()
  devedor: Debtor;

  @Column()
  valor: Value;

  @Column()
  chave: string;

  @Column()
  txId: string;

  @Column()
  versao: string;
}


export default Payload;