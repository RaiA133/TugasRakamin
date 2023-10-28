FROM node:18-alpine

WORKDIR /rakamin/homework/week11

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
