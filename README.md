# Clarke Energia Backend

Este é o backend do projeto Clarke Energia, responsável por fornecer a lógica de negócios.

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
- `npm start` para iniciar o servidor

### Rodar com Docker

- Criar a imagem

```
docker build -t clarke-energia-backend .
```

- Inicia um container

```
docker run -p 3000:3000 clarke-energia-backend
```

## Testes

- `npm test` para rodar os testes
