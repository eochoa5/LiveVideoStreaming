var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var Log = require('log'), log = new Log('debug');


server.listen(process.env.PORT || 3000);
log.info('server running');


app.use(express.static(__dirname));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');

});

io.sockets.on('connection', function(socket){
	socket.on('stream', function(image){
		io.sockets.emit('stream',image);

	});

	
	
});

