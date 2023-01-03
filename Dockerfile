FROM node:16.15
WORKDIR /usr/src/mywebsite
COPY ./package*.json ./
RUN npm install --legacy-peer-deps
COPY . .