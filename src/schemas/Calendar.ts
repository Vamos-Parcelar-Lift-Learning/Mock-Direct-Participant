import { Column } from 'typeorm';

class Calendar {
  @Column()
  recebivelAposVencimento: boolean;

  @Column()
  expiracao: Date;
}

export default Calendar;
