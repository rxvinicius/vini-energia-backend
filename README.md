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

## Iniciando

**Clone o repositório:**

```bash
git clone https://github.com/rxvinicius/vini-energia-backend.git
cd vini-energia-backend
```

## Configuração do Ambiente

Este projeto utiliza diferentes arquivos de configuração `.env` para gerenciar as variáveis de ambiente em diferentes cenários. Abaixo está uma descrição de cada arquivo:

### 1. `.env.development`

Este arquivo é utilizado durante o desenvolvimento local. Ele contém configurações específicas que são necessárias para executar o backend em sua máquina local. O conteúdo típico deste arquivo inclui:

```bash
MONGO_URI=mongodb://localhost:27017/rx-energia
```

### 2. `.env.production`

Este arquivo é usado quando o aplicativo é implantado em produção. As variáveis de ambiente aqui devem refletir as configurações de produção, como as credenciais de banco de dados e outras configurações sensíveis. Um exemplo de conteúdo é:

```bash
MONGO_URI=mongodb+srv://rxvinicius:fdQ0E6ptW8OxpDFV@rx-energia.2gzuw.mongodb.net/rx-energia?retryWrites=true&w=majority&appName=rx-energia
```

### 3. `.env.docker`

Este arquivo é especificamente para uso com o Docker. Ele permite que o container se conecte ao MongoDB em sua máquina local quando o container está sendo executado. O conteúdo típico deste arquivo inclui:

```bash
MONGO_URI=mongodb://host.docker.internal:27017/rx-energia
NODE_ENV=development
```

### Como Usar

- **Para desenvolvimento local:** Certifique-se de que o arquivo `.env.development` esteja configurado corretamente antes de iniciar o servidor.
- **Para produção:** Utilize o arquivo `.env.production` ao implantar o aplicativo.
- **Para uso com Docker:** Utilize o arquivo `.env.docker` quando criar e executar containers Docker, garantindo que o backend possa acessar o MongoDB em sua máquina.

Certifique-se de que os arquivos `.env` estejam no diretório raiz do projeto e que contenham as configurações apropriadas para o ambiente em que você está trabalhando.

## Executando o Projeto sem Docker

### Pré-requisitos

- Certifique-se de ter o [Node.js](https://nodejs.org/) instalado (versão 16 ou superior).
- Certifique-se de ter o [MongoDB](https://www.mongodb.com/try/download/community) instalado e rodando em sua máquina (por padrão, na porta `27017`).

### Passos para Rodar o Projeto

- **Instale as dependências** com `npm install`
- **Configure o ambiente:** Certifique-se de que o arquivo .`env.development` esteja configurado corretamente com as variáveis de ambiente necessárias, especialmente a variável `MONGO_URI` que deve apontar para o seu MongoDB local
- **Inicie o servidor** com `npm run start:dev`

  > Para ambientes de produção, utilize o arquivo `npm run start:prod` ao rodar o container.

## Executando o Projeto com Docker

### Pré-requisitos

- Certifique-se de ter o [Docker](https://www.docker.com/get-started) instalado em sua máquina.
- (Opcional) Para uso local do MongoDB, certifique-se de que ele está instalado e rodando na porta padrão (`27017`).

### Passos para Rodar o Projeto

1. **Construa a imagem Docker:**

```bash
docker build -t vini-energia-backend .
```

2. **Execute o container Docker:** Para rodar o container, utilize o arquivo `.env.docker` para que o MongoDB local seja acessível:

```bash
docker run --env-file .env.docker -p 3000:3000 vini-energia-backend
```

> Para ambientes de produção, utilize o arquivo `.env.production` ao rodar o container.

## Testes

- `npm test` para rodar os testes
