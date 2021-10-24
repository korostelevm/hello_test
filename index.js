const express = require('express')
const app = express()
app.get('/', (req, res) => {
    console.log("A GET Request !")
    res.json({
        Hello:Math.random(),
        var: Math.random()*100
    })
})
app.listen(process.env.PORT || 3000)
          
