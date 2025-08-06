FROM node:20-alpine

WORKDIR /usr/src/app

RUN apk --no-cache add curl

COPY package*.json ./

RUN npm ci --only=production

COPY . .

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]