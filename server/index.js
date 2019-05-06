var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require('../database-mysql');
var routes = require('./routes/routes.js');
var app = express();
var PORT = process.env.PORT || 3000;

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use('/burrhurr/', routes);

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}!`);
});

