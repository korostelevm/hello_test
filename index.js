const express = require('express')
const app = express()
app.get('/', (req, res) => {
    console.log("A GET request!")
    res.json({Hello:'asdfasdfasdfsdf'})
})
app.listen(process.env.PORT || 3000)
          