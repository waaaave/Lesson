const express = require('express')
const app = new express()
const fs = require('fs')

app.use(express.static('public'))
app.use((req, res) => {
  const stat = fs.statSync('./a.txt')
  // console.log(stat);
  if (req.headers) {
    
  }
})
app.listen(3000)