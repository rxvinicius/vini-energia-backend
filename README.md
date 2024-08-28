# Clarke Energia Backend

Este é o backend do projeto Clarke Energia, responsável por fornecer a lógica de negócios.

👉 [Demo online](https://clarke-energia-backend-8da448044f10.herokuapp.com)

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Apollo Server
- GraphQL
- TypeGraphQL
- Jest
- Supertest

## Instalação

### Rodar localmente

- Clone esse repositório
- Instale as dependências com `npm install`
- Renomeie o arquivo `.env.local` para `.env`
- `npm start` para iniciar o servidor

### Rodar com Docker

- Renomeie o arquivo `.env.local` para `.env`
- Criar a imagem

```
docker build -t clarke-energia-backend .
```

- Inicia um container

```
docker run --env-file .env -p 3000:3000 clarke-energia-backend
```

## Testes

- `npm test` para rodar os testes
