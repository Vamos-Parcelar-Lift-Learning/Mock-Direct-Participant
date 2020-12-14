import Debtor from '../../schemas/Debtor';
import Value from '../../schemas/Value';
import Calendar from '../../schemas/Calendar';

class ICreatePayload {
  calendario: Calendar;

  devedor: Debtor;

  valor: Value;

  chave: string;

  txId: string;

  versao: string;
}

export default ICreatePayload;
