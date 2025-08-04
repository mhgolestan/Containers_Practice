FROM node:20

WORKDIR /src/usr/app

COPY --chown=node:node . .

RUN npm ci --omit=dev

CMD npm start