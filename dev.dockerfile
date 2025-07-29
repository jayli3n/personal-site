FROM node:16.20.2

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

CMD ["npm", "run", "dev"]
