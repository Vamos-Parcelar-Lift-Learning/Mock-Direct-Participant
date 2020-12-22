import { Column, Entity, ObjectIdColumn, ObjectID } from 'typeorm';
import Calendar from './Calendar';
import Debtor from './Debtor';
import Value from './Value';

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
