FROM node:18-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm cache clean --force

RUN npm install --registry https://dev.nexus.agrocarteira.com/

RUN npm install @macrointell/todoagro-shared@latest --registry https://dev.nexus.agrocarteira.com/

COPY . .

RUN  apk update

RUN apk add tzdata

ENV TZ=America/Argentina/Buenos_Aires

EXPOSE 5030

CMD ["npm","run","dev"]
