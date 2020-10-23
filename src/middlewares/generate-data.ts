// import faker from 'faker-br'
// import fs from 'fs';
// import path from 'path';

// import * as db from '../db.json';

const faker = require('faker')


const keyTypeParams = ['URL', 'STATUS'];

function genData(){
  const urlPagamento = faker.finance.bic()
  const basePort = ("http://localhost:3000/")
  console.log(JSON.stringify(basePort+urlPagamento))

}

export default genData;