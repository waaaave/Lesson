const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.get('/', (req, res) => {
    res.json({
        a: 1
    })
})

app.listen(3000)
