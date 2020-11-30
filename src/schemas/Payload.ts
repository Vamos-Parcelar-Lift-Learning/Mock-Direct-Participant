import {
  Column,
  ObjectID,
  Entity,
  ObjectIdColumn,
} from 'typeorm';

@Entity('payloads')
class Payload {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  calendario: Object;

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
