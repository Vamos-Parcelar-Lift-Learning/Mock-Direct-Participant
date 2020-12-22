<h1 align="center">
  MOCK DIRECT PARTICIPANT
</h1>

<p align="justify">
  Repositório da aplicação <b>backend</b> com a finalidade de mockar os dados da Shipay (Participante Direto da VP)</p>

[Vamos-Parcelar-Lift-Learning](https://vamosparcelar.com.br/blog/vamos-parcelar-e-escolhida-para-o-lift-learning/).

<p>Este repositório contempla as seguintes funcinalidades:</p>

- Criar Order
- Listar Order
- Acessar Payload

## Status do Projeto:

**Em desenvolvimento**

## Acesso ao Deploy do Projeto:

<p align="justify">
É possivel acessar a partir do seguinte link:
  <p align="center">
    <a href="https://mockdirectparticpant.herokuapp.com" target="_blank">
    <img alt="Demo on Heroku" src="./docs/demo_on_heroku.png"></a>
  </p>
</p>

## Pré requisitos para rodar a aplicação e os comandos para instalação.

### Pacotes necessários

- docker
- git
- node

### Subindo o banco de dados

```bash
$ docker run --name mongo -p 27017:27017 -d mongo
```

### Subindo o serviço

```bash
# Clone o repositório
$ git clone https://github.com/Vamos-Parcelar-Lift-Learning/Mock-Direct-Participant

# Vá para o diretório do projeto
$ cd Mock-Direct-Participant
```

#### Variáveis de Ambiente

Crie na raiz do projeto um arquivo .env com as seguintes configurações:

```bash
URL_PAYLOAD="http://localhost:3333/payloads"
APP_SECRET="vp"
```

#### Instalação de dependências

```bash
# Instale as dependências
$ yarn install
```

## Rodando o serviço

Após instalação da dependências, basta rodar o seguinte comando:

```bash
# Rode o serviço
$ yarn dev:server
```

## Endpoints

\<host> = deploy-mock-directparticipant ou "http://localhost:3333"

### Order

**[POST]** \<host>/order/ - cria order

#### Body :

```json
{
  "buyer": {
    "cpf": "12345678900",
    "email": "joohnsouza86@gmail.com",
    "first_name": "João",
    "last_name": "Souza",
    "phone": "(11) 99999-9999"
  },
  "callback_url": "url",
  "items": [
    {
      "item_title": "conta de luz",
      "quantity": 1,
      "unit_price": 354.99
    }
  ],
  "order_ref": "123123-1231-231-212",
  "total": 354.99,
  "wallet": "pix"
}
```

#### Resposta :

```json
{
  "order_id": "5fd26150b08407001780629c",
  "qrcode": "data:image/gif;base64,R0lGODdhrwCvAIAAAAAAAP///ywAAAAArwCvAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5omm6sq2FwDH8kzXtTMnebNb9m/DAYdEgLCIpB1hOtnS+Er+nlIktUp8NmPaKLa3+Eqv4iDPiQAr1JMymuEukuPvcD3ATt/b9DmdecbFoZaEAbQFeFCoJ6i455Vo16hBaAWpxBiJZ+k4uelp+NipGeq56DOVCTU6hLhqkIcKqtpRKXdpq3kKexdb4ftJeul6iNt7fMvqWivKa8rpLKwcKB2Nybob/LqGnEVLvZ0NPN6snTv2Ddfdmi6pC63dpT6LvS5efl48Pf+ebC3vbhsxe/DIPfMXD9xAM/sCAuTG0No9ev9U6avIL1xBgv8H+7lZJuFiwnoRRzq0mKqhuXULq4CMIDJfSownSd5ot7KjxjgvIcTkeFNlz5xBaRLd6bHMUD9DJ1YzefRcS6RUxSwFJxVlSYNJf1J8ILJUUbD4gF4z2nTjV6aDZpL9KnNrWZ1en7LdEFahXptnoaZFCOwuJbcP/3oTitOpwJCEja3FaZgd4sm/WCZ2W5fq1YzM4JbjozNy3KSRQdtl7PkxTMsqM2dt/RnysL2DQ1+Wi5u0bM5tU59ebRt27r6v0dLOwPUPcdZGi0N1Plq5nz+lb+sWfr258pJTqVvX/L069qrbn5YfC535c/Xpz891n319cO3z5Xc97wJvY8pvx27/zg+gYBD9FlByAR6Imn+7+bSfcQg+yFdhCfb1H4QI5sWfgBWy4B1f2YiG2Xvk1efcdGp9dJxiD2UmHoM8aeVSiicuNl578ZkIWB8y5ujbiPGViNUX3cED4nArhkhibBGGFyRd6hVpnoimSVYgeyJGVyGWx20II4VdtjjgckbuqCB/gXWZnI00SmRWlm1uuWCYGLKZZI9amvkmb3q6eFhNdEY55p5hHsndl2g+SaaXS+LZI6Fl/umjmATapyikbjaaaJpmASnonEddCmiokQqo4oRTkSolnDVeuSmiwKHXYFSxSughq/Vx+aqklcpaaK44isqpg5UNpylCU/665qdx/56Z651VGmtqk48qy+ikqPYKqae0ZmvrjXGKBd6iwg566K3LdptsZz8iOWl0wfp1LrYeqPkulLpuC6+4I9Drqp+8elttstr2tm6gfEb6roHSpjuhmqeW26ecQsZrraEZOWwxt9DWyqOo4BZb8H1OYoEsi6oeDHK49MH64sUTB/wxumC69vKzMcLsGLDsUkmtv7javKsIzGosMsvTKixLxCcM/S/Cefr87cJMq8swx0XrijTUzc4aAtOK0YypoFMODMLUGe/bLwVgw6cyclzrZ27SWLMN8LDTUv1zf3PTnbeGXac9dqvl9b3w0oA3LPh2hI8H5sOdEhmtvp56bWXclv9m+ra/awus5Mptp+woz8eePXnnlDZ+tr1mrzqyx5F7Duqu7ppur+Naaw751h1zznfq32XddMy7l1xzz+TqqzrtEN8rtY7I/56q1VUDbbLLg/vOuuvSCx9xyh1e/ri8eZdusPGr2/354WIXzn72bQtded16B25n/MyXgHGGJ0tcf51GT+82/73vdXoDHfQsNy/7LQ52UZOb37a3v9HBLWQAlCDQkIUvCwaQgvDrn87kdb7j1YaDf/Mg75TWwIPhjUllk1nzwjbCCmKudSe8HwMD9rXooc92xuNh/sZlFeyNK3TO4h8JGffC/wFPg5u71hGBWDzyVcx9PPShAimGjuf/6U96CUtc+mjIxFgVcUjlS54AqzhD7YGPejsjYhsP2K6nibCHy+siDX9Ix/AdTY5k/J8byzfGNNYQjUgs5O3UpsP5pdB8psPjEmezPj0CsHoqZCEUVVPJSOIOk4zkpCMTCa4MWrKA6ruhKecYygiO0omTTKQBt3jIB6Isd5nc5AflJ0rrTZFoQdufHf0ISfSFMIgOTBQrUym3YRZPg6iTnPJgaUQZcvGZQxzlL7+oRkoRs5aoNOYqrelKL5LtknE8IxabecrvKVKTc8TjzMJ5R1p2E5qfhOHpvDlN8S3ScC1LpzzHmcdqqkCd/AJh5gKaLxcQ1H5S7KUWBZqChQqw/6GUMygn+YkiQwavfbO0Zx+Vss86UpOUE5XnR7eZUJKicII2bFpF2bZAl470mCL1JN0GqLuVxrCgOo2mRHcp04sirqQbiyUBQ/fR2H0oidKE6Dq5OTsEohSDwdxgK4kKTF2KjqnIjGEY4ynVZXK1ql19qjbfqFWALtVXy3unPdfqz35G849ZPaUZsxnVnjY0qeB86z8ZKtaHnhWQacvrIOGYxQsKsp54/StWEzvXxQKWZCHNZ2OLikiwUhClyqSsJAFK15b+tKlBvWxPv9o9caJVmI69Wgjvik2QQvOk8DwtAUslWO/tjJIprRdieXrYtO52tb0t5WDrilDdEou4wJN7qdMeiy/Ozih24/Ni7XwZxemec5Gv/a1xO2tb4Qp1tpJFYEzhqlKHGpWtEKTnSNFL1WKylK/uHS8vuafeee6wrdx9r0nHmkz88JedhGRjGVVpWcii17kM1i57O6q4Aa93jenlbS55KV3MNtimnnXqhiPc3gkjlLbmrayFToziFKt4xSxusYtfDOMYy3jGNIZAAQAAOw==",
  "qr_code_text": "https://mockdirectparticpant.herokuapp.com/payloads/5fd26150b08407001780629d",
  "status": "pending"
}
```

- **[GET]** \<host>/orders/<order_id> - acessa order com seu respectivo status

```json
{
  "id": "5fd26150b08407001780629c",
  "wallet": "pix",
  "external_id": "123123-1231-231-212",
  "status": "approved",
  "paid_amount": 354.99,
  "total_order": 354.99,
  "callback_url": "url",
  "items": [
    {
      "item_title": "conta de luz",
      "quantity": 1,
      "unit_price": 354.99
    }
  ],
  "created_at": "2020-12-10T17:56:32.008Z",
  "updated_at": "2020-12-10T17:56:37.152Z"
}
```

- **[GET]** \<host>/payloads/<hash_obtida_no_qr_code_text> - acessa o <i>payload</i> JSON do QR Code dinâmico

```json
"eyJ4NXQiOiJENTd2Q2dnRHg0SWU4MlN3X29MdG9tSmJNeE0iLCJqa3UiOiJsb2NhbGhvc3Q6MzAwMC9qd2siLCJraWQiOiI3VXdORFF5TFViNjVyQmwzdDNMVjJvRXR3X3JjQkw2WjBWdEdrMzdSVGVVIiwiYWxnIjoiUlMyNTYifQ.eyJpZCI6IjVmZDI2MTUwYjA4NDA3MDAxNzgwNjI5ZCIsImNhbGVuZGFyaW8iOnsicmVjZWJpdmVsQXBvc1ZlbmNpbWVudG8iOmZhbHNlLCJleHBpcmFjYW8iOiIyMDIwLTEyLTEwVDE4OjU2OjMyLjA0MFoifSwiZGV2ZWRvciI6eyJjcGYiOiIxMjM0NTY3ODkwMCIsIm5vbWUiOiJqb2FvemltIHNvdXphIn0sInZhbG9yIjp7Im9yaWdpbmFsIjozNTQuOTl9LCJjaGF2ZSI6IjMwLjMyMi4wNzQvMDAwMS0wNSIsInR4SWQiOiI2LjM2ODc4MzIxMzU1OTAzNWUrMzQiLCJ2ZXJzYW8iOiIxLjAuMCJ9.pp-mwMc_2Tgsc5k-dW7lZjSvUn3S8qcJM6MlpFxVGu-_kU5PfnzIQ6E0HwnpalEikyhY5EvRH-NIvSoPPzS_J9em70nhXs9Fi_6jLKz4ljLliMIzOkkVHklIBjVRHU42Lgp_wh90zAQEwvVIcmBd4lAIaD7uwJziNji3qpgSuTz5to3vDhzsRf1hNaI1P4YVeZv5i9QlYNd4U3YVNwe4VkcRFGOjFHQ2Q9D1QThnVwPjAn4iXEAXbTfuYpLG1Mic9vZrlvUSZz9f3l6se41VoCYTkhWQxA-e2uzPz8cOTn143MfkdDoBxO-HW-Lm6CLDAXXpu4n7RFY3YcPe1seiOQ"
```

<!-- - Criar Orders
- Listar Orders
- Acessar Payload -->
<!-- ### Administrador (não necessitam de autenticação)

- **[GET]** \<host>/admin/users - listar todos os usuários.
- **[GET]** \<host>/admin/locators - listar todos os localizadores.

### Autenticação

**[POST]** \<host>/sessions/ - autentica um usuário.

```json
{
  "email": "elizethe6@bol.com.br",
  "password": "121041"
}
```

### Users (necessitam de autenticação)

**[PUT]** \<host>/users/ - atualizar dados de um usuário autenticado.

```json
{
  "name": "Elizete II",
  "birthdate": "1980-05-14T06:02:11.010Z",
  "cpf": "16273726523"
}
```

### Locators (necessitam de autenticação)

**[GET]** \<host>/locators/\<code:string> - buscar os dados de um localizador.

### Transactions (necessitam de autenticação)

**[GET]** \<host>/transactions - busca as transações de um usuário logado.

**[GET]** \<host>/transactions/\<code:string> - busca os dados de uma transação de um usuário logado.

**[POST]** \<host>/transactions - Cria uma transação de um usuário logado.

```json
{
  "key": "hans65@hotmail.com",
  "cashback": 0,
  "transaction": {
    "nickname": "minhas contas",
    "bills": [
      {
        "code": "597364863907",
        "name": "Celular",
        "description": "Conta de Celular",
        "issuer": "Costa - Reis",
        "expiration_date": "2020-11-17T09:53:39.469Z",
        "amount": 174
      }
    ]
  }
}
``` -->

## Licença do Repositório
