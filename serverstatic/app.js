const express = require('express')
const app = express()



// middlewares
app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
    res.status(404).send('Not Found')
})

app.listen(5000, function() {
    console.log("Servidor iniciado en puerto 5000")
    console.log(`http://localhost:5000`)
})