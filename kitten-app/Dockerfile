FROM node:14.14.0-alpine3.11
WORKDIR /kitten-app
ENV PATH="./node_modules/.bin:$PATH"
COPY  . .
RUN yarn build