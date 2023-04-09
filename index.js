const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/games', function(req, res) {
    res.sendFile(__dirname + '/games.html')
})

app.get('/without-control', function(req, res) {
    res.sendFile(__dirname + '/withoutcontrol.html')
})

app.listen('4000', function() {
    console.log('Server is running!')
})
