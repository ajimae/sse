const eventSource = new EventSource('http://localhost:8085/')

function updateMessage(message) {
  const list = document.getElementById('message')
  const item = document.createElement('p')

  item.innerText = message
  list.appendChild(item)
}

eventSource.onmessage = function(event) {
  console.log(event)
  updateMessage(event.data)
}

eventSource.onerror = function(error) {
  updateMessage('an error occured, closing connection...\n\n' + error.message)
  eventSource.close()
}
