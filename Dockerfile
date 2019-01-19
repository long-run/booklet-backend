FROM node:8

COPY . /app

WORKDIR /app
RUN npm install && \
    npm run build

CMD node dist/bundle.js
