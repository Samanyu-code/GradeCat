const express = require('express')
const app = express()
const path = require('path')

const { PORT } = require('./PORT.json')

app.use(express.static('views'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`)
})
