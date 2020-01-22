FROM node:alpine
RUN mkdir -p /code
WORKDIR /code
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npm", "start"]
