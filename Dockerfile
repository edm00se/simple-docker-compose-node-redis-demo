FROM node:alpine
RUN mkdir -p /code
COPY . /code
WORKDIR /code
RUN npm install
CMD ["npm", "run", "watch"]
