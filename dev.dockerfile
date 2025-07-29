FROM node:16.20.2 AS dev

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY public ./public
COPY src ./src

CMD ["npm", "run", "dev"]
