var express = require('express');
var pug = require('pug');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  console.log('Requesting home page...');
  response.send(pug.renderFile(__dirname + '/views/index.pug', {}));
  // response.sendFile(__dirname + '/index.html');
});

app.get('/thelord', function(request, response) {
  console.log('Requesting lord page....');
  response.send(pug.renderFile(__dirname + '/views/thelord.pug', {}));
});

app.get('/the-twilight', function(request, response) {
  console.log('Requesting contact page....');
  response.send(pug.renderFile(__dirname + '/views/the-twilight.pug', {book: foundBook));
});

app.get('/im', function(request, response) {
  console.log('Requesting contact page....');
  response.send(pug.renderFile(__dirname + '/views/im.pug', {}));
});

app.listen(3000, function() {
  console.log('Web server started on port 3000');
});
