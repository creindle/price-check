var express = require('express');//Go get this package and make it available inside this package. //We're using require (a node convention)
var app = express();//Express function is attached to app
var bodyParser = require('body-parser');
var path = require('path');
var api = require('./lib/api');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));//Send the file
});//send the file that's in the folder views

app.get('/products', function (request, response) {//The next get has a comment in there (this is what we're supposed to change to make it work)
//The first argument is a string^^
  var lat = request.query.latitude;
  var lng = request.query.longitude;

  response.json(api.getProducts(lat, lng));
});


app.listen(3000);

module.exports = app;
