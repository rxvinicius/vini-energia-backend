# Vini Energia Backend

Este é o backend responsável por fornecer a lógica de negócios do projeto [Vini Energia](https://github.com/rxvinicius/vini-energia-frontend) que fiz durante um processo seletivo.

👉 [Demo online](https://clarke-energia-backend-production.up.railway.app)

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
docker build -t vini-energia-back .
```

- Inicia um container

```
docker run --env-file .env -p 3000:3000 vini-energia-back
```

## Testes

- `npm test` para rodar os testes
