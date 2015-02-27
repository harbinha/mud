var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 5000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.normalize(__dirname + "/..") + '/client'));
require('./routes')(app);


var io = require('socket.io').listen(app.listen(port));
io.sockets.on('connection', function(socket) {
    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function(data) {
        io.sockets.emit('message', data);
    });
});
