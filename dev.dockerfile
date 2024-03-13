# Base
FROM node:16.20.2 AS base

# For dev
FROM base AS dev

WORKDIR /usr/src/app

CMD ["npm", "run", "start"]
