FROM node:boron-alpine
RUN mkdir -p /code
WORKDIR /code
COPY . /code
RUN npm install
CMD ["npm", "start"]
