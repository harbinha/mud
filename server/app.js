var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 5000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.normalize(__dirname + "/..") + '/client'));
require('./routes')(app);

app.listen(port, function() {
  console.log("server listening on port " + port);
});
