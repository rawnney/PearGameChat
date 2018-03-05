var express = require('express');
var socket = require('socket.io');
var https = require('https');

var app = express();

server = app.listen(process.env.PORT, function(){
    console.log('server is running on port 5000')
});

io = socket(server);

io.on('connection', (socket) => {
    // console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        //console.log(data);
        io.emit('RECEIVE_MESSAGE', data);
    })
});
