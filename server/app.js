var express = require('express');
var app = express();
var path = require('path');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.normalize(__dirname + "/..") + '/client'));
require('./routes')(app);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
