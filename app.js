const express = require('express');
const app = express();
const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

let client = redis.createClient({
  host: 'localhost',
  port: 6123,
  password: 'my secret',
  db: 1,
});

client.on('error', console.error);

session({
  store: new RedisStore({ client }),
  saveUninitialized: false,
  secret: 'amazing stuff',
  resave: false,
})

RedisStore['hits'] = 0;

app.get('/', (req, res) => {
  RedisStore['hits']++;
  const num = RedisStore['hits'];
  res.send(`Hello World!<br><p>I have been loaded ${num} times.</p>`);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
