const express = require('express')
const app = express()
app.get('/', (req, res) => {
    console.log("A GET Request !")
    res.json({
        Hello:Math.random(),
        var: Math.random()*100,
        asdfasf:'cx'   })
})
app.listen(process.env.PORT || 3000)
          
