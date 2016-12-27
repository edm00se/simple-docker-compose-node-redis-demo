FROM node:boron-alpine
ADD . /code
WORKDIR /code
RUN npm install
CMD npm start
