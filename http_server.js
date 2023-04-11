const http = require('http')
const express = require('express')
const WebSocket = require('ws')

const app = express();
const server = http.createServer(app)

server.listen(1337, function () {
    console.log('Server running')
})

var udata = {
    sampleTime: '1450632410296',
    data: '76.36731:3.4651554:0.5665419'
};

const wss = new WebSocket.Server({server});

wss.on('connection', function (ws) {
    console.log('new connection')
    ws.username = udata;
    ws.on('message', function (data) {
        console.log('New message: ' + data + ' ++++ ' + ws.username.data);
    ws.send('something+++++');
    })
    
    ws.send('something');
})


