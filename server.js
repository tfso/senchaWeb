
var express = require('express');

var server = express();
server.use(express.static(__dirname + '/web'));

var port = 6262;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});