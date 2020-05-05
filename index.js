const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000
 
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')))
app.get('/frmw-003', (req, res) => res.sendFile(path.join(__dirname, 'public/frmw-003/dist/index.html')))
app.listen(PORT)