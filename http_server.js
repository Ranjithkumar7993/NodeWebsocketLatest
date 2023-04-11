const https = require('https');
const fs = require('fs');
const express = require('express')
const WebSocket = require('ws')

const app = express();
const server = new https.createServer({
  cert: fs.readFileSync('/etc/ssl/certs/mobicipfalcon_com.crt'),
  key: fs.readFileSync('/etc/ssl/private/mobicipfalcon_com.key')
});


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


