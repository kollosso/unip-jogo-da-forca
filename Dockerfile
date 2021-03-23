FROM node:12

WORKDIR /usr/app

COPY package*.json ./

COPY . .