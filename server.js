var http = require('http');
var Static = require('node-static');
var juice = http.createServer(handler);
var path = require('path');
var logger = require('morgan');
var io = require('socket.io').listen(juice);
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var express = require('express');


var juice = express();


juice.set('port', process.env.PORT || 1234);
juice.use(logger('dev'));
juice.use(bodyParser.json());
juice.use(bodyParser.urlencoded());
juice.use(cookieParser());
juice.use(express.static(path.join(__dirname, 'public')));

function handler (request,response){
    request.on('end',function(){
      files.serve(request,response);
    }).resume();
}

io.set('log level' , 1);

io.sockets.on('connection',function(socket){

  socket.on('send:coords', function(data){
    socket.broadcast.emit('load:coords' , data);
  });
});

// start the juice on specified port
// console.log('bbdo-geolocation server on ' + port);

juice.listen(juice.get('port'), function() {
    console.log('juice is listening on port 1234');
});
