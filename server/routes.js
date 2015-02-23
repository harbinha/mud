'use strict';

var path       = require('path'),
    clientPath = path.normalize(__dirname + "/..") + '/client/';

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(clientPath + 'index.html');
    });

    app.get('/test', function(req, res) {
        res.send('test page');
    });

    // 404
    app.use(function(req, res) {
        res.status(404);
        res.render(__dirname + '/views/404.html');
    });

    // 500
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send('500!!' + { error: err});
    });
};
