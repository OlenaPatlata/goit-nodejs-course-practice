FROM node:14.16.1-alpine

WORKDIR /server

COPY ./package.json .
RUN npm install

COPY . .

EXPOSE 8083

CMD npm start