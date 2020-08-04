//require mira si existe express dentro de package.js
const express = require('express'),
      app = express(),
      http = require('http').createServer(app),
      io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', socket => {
    console.log('it works!');
    socket.on('draw', data => {
        console.log(data);
        socket.broadcast.emit('draw', data);
    });
});

http.listen(process.env.PORT || 2000, () => {
    console.log('listening on 2000...');
});



