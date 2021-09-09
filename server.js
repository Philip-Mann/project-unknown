require('dotenv').config();
const express = require('express');
const session = require('express-session');
const { PORT } = process.env;
const path = require('path');

// changed from app to server
const server = express();
// server.use(cors(corsOptions));
process.env.HTTPS = true

// session middleware
const sess = {
    secret: 'keyboard cat',
    cookie: {
      maxAge: 24 * 60 * 60 * 1000
    },
    resave: false,
    saveUninitialized: false
}
server.use(session(sess));

// Serving up the static build file for React
server.use(express.static(path.resolve(__dirname + '/react-ui/build')));
server.use(express.json());

// to see if server is running
server.get('/heartbeat', (req, res) => {
    res.json({
        "is": "working"
    });
});

server.get('*', function (req, res) {
    res.sendFile(__dirname + '/react-ui/build/index.html');
});

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});