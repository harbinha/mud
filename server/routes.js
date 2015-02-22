'use strict';

var errors = require('./components/errors'),
    path    = require('path');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(path.normalize(__dirname + "/..") + '/client/index.html');
    });

    app.route('/*').get(errors[404]);
};
