
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
        var string = decypher(file);
        console.log('\nSUCCESS: \tFile SAVED\n', string);
        socket.emit('tracklist', string);
      }
    });
  });
});

var decypher = function(file){
  console.log('\n\n\ndecypher method called');
  console.log(file.name);
  var string = "";
  var fileString = fs.readFileSync(file.name).toString();
  // console.log(fileString);
  // var rs = fs.createReadStream(file.name);
  // rs.setEncoding('utf8');
  // rs.on('readable', ()=>{
  //   string = rs.read();
  //   console.log('\nreadable', string);
  // });
  // rs.on('end', ()=>{
  //   console.log('\nend read');
  // });
  return fileString;
}



server.listen(port, function(){
  console.log(`Server is up and running on port: ${port}`);
});
