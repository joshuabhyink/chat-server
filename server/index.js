const express = require('express')
const messagesCTRL = require('./Controller/messages_controller')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const port = 3001

app.get('/api/messages', messagesCTRL.read)
app.post('/api/messages', messagesCTRL.create)
app.put('/api/messages/:id', messagesCTRL.update)
app.delete('/api/messages/:id', messagesCTRL.delete)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})