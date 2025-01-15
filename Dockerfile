FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g yarn --force

EXPOSE 3000

CMD yarn && yarn dev
