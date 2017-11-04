const express    = require('express'),
      mysql      = require('mysql2'),
      bodyParser = require('body-parser');

const ENV  = process.env.NODE_ENV || 'development',
      PORT = process.env.PORT || 3001,
      app  = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (ENV === 'production') {
    app.use(express.static('client/build'));
} else {
    app.use(express.static('client/public'));
}

app.use('/', require('./routes/routes'));

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('user connected');
    socket.on('press', data => {
        console.log(data);
    });
});
server.listen(PORT);

// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
// });
