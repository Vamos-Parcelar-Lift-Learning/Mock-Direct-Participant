const cpfValidation = keystring => {
  const cpf = /^[0-9]{11}$/;
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
  const phone = /^\+[1-9][0-9]\d{1,14}$/;
  return phone.test(keystring);
};

const middlewareValidateDict = (req, res, next) => {
  let keystring = req.query.Key;

  console.log('validando dados pedido');

  if (req.method === 'POST' && keystring) {
    // a query string está trocando o + por " " na requisição
    // o replace desfaz essa alteração
    keystring = keystring.replace(' ', '+');
    req.query.Key = keystring;

    if (
      cpfValidation(keystring) ||
      phoneValidation(keystring) ||
      emailValidation(keystring) ||
      nameValidation(keystring) ||
      surnameValidation(keystring)
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
