const express = require('express')
const path = require('path')
const app = express()
const PORT = 5000


app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => res.render('index'))