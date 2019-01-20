FROM node:8

COPY . /app

WORKDIR /app
RUN yarn install
# RUN yarn install && \
    # yarn run build

# CMD node dist/bundle.js
CMD yarn run watch
