FROM node
ADD . /code
WORKDIR /code
RUN npm install
CMD npm start
