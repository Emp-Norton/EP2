
var express = require('express');
var app = express();
var request = require('request');

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/steam/:id', function(httpRequest, httpResponse) {
    var id = httpRequest.params.id;
    var url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=9A18D3958AB5672125F3540187C68728&steamids=${id}`;
    request.get(url, function(error, steamHttpResponse, steamHttpBody) {
        httpResponse.setHeader('Content-Type', 'application/json');
        httpResponse.send(steamHttpBody);
    });
});

var port = 4000;
var server = app.listen(port);
console.log('Listening on port ' + port);
