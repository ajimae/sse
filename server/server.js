const express = require("express")
const server = express()

const PORT = 8085

server.get('/', function(req, res) {
  console.log('client connected')
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Access-Control-Allow-Origin', '*')

  const intervalID = setInterval(function() {
    const date = new Date().toLocaleDateString()
    res.write(`data: ${date}\n\n`)
  }, 3000)

  res.on('close', function() {
    console.log('client connection closed')
    clearInterval(intervalID)
    res.end()
  })
})

server.listen(PORT, function() {
  console.log(`server running on port ${PORT}`) 
})