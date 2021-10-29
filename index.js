const express = require('express')
const app = express()
app.get('/', (req, res) => {
    console.log("A GET Request !")
    
    res.json({
        Hello:"World",
        var: Math.random()*100,
        asdfasf:'ffff'   })
})
app.listen(process.env.PORT || 3000)
          
