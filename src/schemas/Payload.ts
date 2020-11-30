import {
  Column,
  ObjectID,
  Entity,
  ObjectIdColumn,
} from 'typeorm';
import Calendar from './Calendar';

@Entity('payloads')
class Payload {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  calendario: Calendar;

  @Column()
  devedor: Object;

  @Column()
  valor: Object;

  @Column()
  chave: string;

  @Column()
  txId: string;

  @Column()
  versao: string;
}


export default Payload;