FROM node:14
WORKDIR /home
COPY . .
WORKDIR /home/express
RUN npm i