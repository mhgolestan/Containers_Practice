FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

COPY . .

ENV HOST=0.0.0.0

CMD ["nodemon", "--inspect=0.0.0.0:9229", "--watch", ".", "./bin/www"]
