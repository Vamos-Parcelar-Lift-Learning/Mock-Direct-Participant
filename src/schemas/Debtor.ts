import { Column } from 'typeorm';

class Debtor {
    @Column()
    cpf: string;

    @Column()
    nome: string;
}

export default Debtor;