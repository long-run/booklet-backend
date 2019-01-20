FROM node:8

COPY . /app

WORKDIR /app
RUN yarn install

CMD yarn run watch
