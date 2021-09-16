1. 首先 我们客户端主动发送 HTTP 请求，服务器在 3000 端口上响应首页 html
   3000 http 200 text/html img/jpg 断开
2. js 代码运行 实例化 websocket 对象 连接上服务器端双工通信 建立并保持通道（TCP/IP）
   ws：//localhost:8080 101 switch protocol
   ws.send()
   ws.on()