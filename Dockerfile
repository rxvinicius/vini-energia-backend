# Use uma imagem base com Node.js
FROM node:16

# Crie e defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos de configuração do TypeScript e de pacotes
COPY package*.json ./
COPY tsconfig.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código fonte para o diretório de trabalho
COPY . .

# Exponha a porta que a aplicação usará
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
