const express = require('express')
const app = express()
const path = require('path')
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/' + req.url)
})
const port = 8000
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
