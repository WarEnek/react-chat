const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({port: 9090})

const clients = []

wss.on('connection', (connection) => {
  clients.push(connection)
  connection.on('message', (message) => {
    const data = JSON.parse(message)

    broadcast(data)
  })
})

function broadcast(message) {
  const data = JSON.stringify(message)
  clients.forEach(client => client.send(data))
}
