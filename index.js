const express = require('express')
const app = express()
app.get('/', (req, res) => {
    console.log(headersss)
    console.log("A GET requehhhst!")
    res.json({Hello:Math.random()})
})
app.listen(process.env.PORT || 3000)
          
