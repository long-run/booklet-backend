FROM node:8

WORKDIR /app
RUN yarn install

CMD yarn run watch
