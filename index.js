const express = require('express')
const app = express()
app.get('/', (req, res) => {
    console.log("A GET Request !")
    
    res.json({
        Hello:"[THE WHOLE] World",
        random: +((Math.random()*100).toFixed(2)),
        asdfasdf:'https://app.cyclic.sh/'   })
})
app.listen(process.env.PORT || 3000)
          
