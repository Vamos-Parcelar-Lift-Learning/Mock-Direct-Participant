const cpfValidation = keystring => {
  // const cpf = /^[0-9]{11}$/; cpf sem - ou .
  const cpf = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
  return cpf.test(keystring);
};

const emailValidation = keystring => {
  const email = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return email.test(keystring);
};

const nameValidation = keystring => {
  const first_name = /^[a-z ,.'-]+$/i ;
  return first_name.test(keystring);
};

const surnameValidation = keystring => {
  const last_name = /^[a-z ,.'-]+$/i ;
  return last_name.test(keystring);
};

const phoneValidation = keystring => {
  const phone = /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/;
  // const phone = /^\+[1-9][0-9]\d{1,14}$/; numero de telefone +55 
  return phone.test(keystring);
};

const itemValidation = keystring => {
  const item_title = /^[a-z ,.'-]+$/i;
  return item_title.test(keystring);
};

const walletValidation = keystring => {
  const wallet =  /(?:pix|mercadopago|picpay|ame|pagseguro|cielo)/;
  return wallet.test(keystring);
};

const orderefValidation = keystring => {
   const order_ref =  /^.{1,255}$/;

   if (typeof(keystring) == "string" && order_ref.test(keystring) == true){
      return order_ref.test(keystring);
   }
   return false;
};

const itemsListValidation = keystring => {
  const item_title = /^[a-z ,.'-]+$/i;
  return item_title.test(keystring);
};

const middlewareValidateDict = (req, res, next) => {
  if (req.method === 'POST') {
    if (
      cpfValidation(req.body.buyer.cpf) &&
      emailValidation(req.body.buyer.email) &&
      nameValidation(req.body.buyer.first_name) &&
      surnameValidation(req.body.buyer.last_name) &&
      phoneValidation(req.body.buyer.phone) &&
      orderefValidation(req.body.order_ref) &&
      walletValidation(req.body.wallet) 
      
    ) {
      next();
    } else {
      res.json({ erro: 'Chave com formato inválido!' });
    }
  } else {
    next();
  }
};

export default middlewareValidateDict;