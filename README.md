# Clarke Energia Backend

Este é o backend do projeto Clarke Energia, responsável por fornecer a lógica de negócios.

👉 [Demo online](https://clarke-energia-backend-8da448044f10.herokuapp.com)

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [GraphQL](https://graphql.org/)
- [TypeGraphQL](https://typegraphql.com/)
- [Jest](https://jestjs.io/)
- [Supertest](https://github.com/visionmedia/supertest)

## Instalação

### Rodar localmente

- Clone esse repositório
- Instale as dependências com `npm install`
- Altere o número da porta no arquivo [startServer](src/startServer.ts) (caso a porta 3000 esteja em uso)

### Rodar com Docker

- `docker build -t clarke-energia-backend .`
- `docker run -p 3000:3000 clarke-energia-backend`

## Testes

- `npm test` para rodar os testes
