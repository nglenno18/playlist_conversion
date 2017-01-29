
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
var dl = require('delivery');
var fs = require('fs');

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
  console.log(`\n\nNew User Connected: \n\t(socket.id):${socket.id}`);

  var delivery = dl.listen(socket);
  delivery.on('receive.success', function(file){
    var params = file.params;
    fs.writeFile(file.name, file.buffer, function(err){
      if(err) {
        console.log('\nFIAL: \tFile COULD NOT be saved');
      }else{
        console.log('\nSUCCESS: \tFile SAVED');
      }
    });
  })
  // socket.on('file-entered', function(params, callback){
  //   console.log('Server recieved a file from the client', params);
  //   callback();
  // });
});




server.listen(port, function(){
  console.log(`Server is up and running on port: ${port}`);
});
