import { Column } from 'typeorm';
import { Double } from 'mongodb';

class Value {
  @Column()
  original: Double;
}

export default Value;
