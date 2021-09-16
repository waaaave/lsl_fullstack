// - 服务器推送消息给浏览器
var app = require('express')();
var server = require('http').Server(app);
//建立通道一直在 ws：//  http://
var WebSocket = require('ws');
var wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', function (ws) {
    console.log('server:receive connection');
    // 双向通信技术  客户端发送消息
    ws.on('message', function (message) {
        console.log('server:received:%s', message);
    })
    // 服务器有主动和客户端链接的功能
    setTimeout(() => {
        ws.send('server world');
    }, 5000)
    ws.send('server world');
})
// url/get
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})
app.listen(3000);