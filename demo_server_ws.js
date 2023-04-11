'use strict';

const https = require('https');
const fs = require('fs');

const { WebSocket, WebSocketServer } = require('ws');

const server = https.createServer({
  cert: fs.readFileSync('/etc/ssl/certs/mobicipfalcon_com.crt'),
  key: fs.readFileSync('/etc/ssl/private/mobicipfalcon_com.key')
});

const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);
  console.log("Connection Established +++++");
  ws.on('message', function message(msg) {
    console.log(msg.toString());
  });
});

server.listen(443, function listening() {
  //
  // If the `rejectUnauthorized` option is not `false`, the server certificate
  // is verified against a list of well-known CAs. An 'error' event is emitted
  // if verification fails.
  //
  // The certificate used in this example is self-signed so `rejectUnauthorized`
  // is set to `false`.
  //
  console.log(server.address().port);
  const ws = new WebSocket(`wss://localhost:${server.address().port}`, {
    rejectUnauthorized: false
  });

  ws.on('error', console.error);

  ws.on('open', function open() {
    ws.send('All glory to WebSockets!');
  });
});
