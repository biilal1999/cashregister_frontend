FROM node:18.4.0 as builder

RUN mkdir /cashregister_frontend
WORKDIR /cashregister_frontend

RUN npm install -g npm@9.4.1