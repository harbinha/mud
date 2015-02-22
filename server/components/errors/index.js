'use strict';

module.exports[404] = function pageNoteFound(req, res) {
    var viewFilePath= 'server/views/404',
        statusCode = 404,
        result = {
            status: statusCode
        };

        res.status(result.status);
        res.render(viewFilePath, function(err) {
            if (err) {
                return res.status(result.status).json(err);
            }
            res.render(viewFilePath);
        });
};
