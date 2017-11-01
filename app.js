const express = require('express');
const app = express();
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const options = {
  host: 'redis',
  port: 6379,
  logErrors: true
};

app.use(
  session({
    store: new RedisStore(options),
    secret: 'amazing stuff',
    resave: true,
    saveUninitialized: true
  })
);

RedisStore['hits'] = 0;

app.get('/', (req, res) => {
  RedisStore['hits']++;
  const num = RedisStore['hits'];
  res.send(`Hello World!<br><p>I have been loaded ${num} times.</p>`);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
