var express = require('express');
var app = express();
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var options = {
  host: 'redis',
  port: 6379,
  logErrors: true
};

app.use(session({
  store: new RedisStore(options),
  secret: 'amazing stuff'
}));

RedisStore['hits'] = 0;

app.get('/', function (req, res) {
  RedisStore['hits']++;
  var num = RedisStore['hits'];
  res.send(`Hello World!<br><p>I have been loaded ${num} times.</p>`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
