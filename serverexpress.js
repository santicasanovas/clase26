const express = require('express')
const app = express()
 
app.get('/', function (peticion, respuesta) {
    respuesta.send(`
            <html>
            <head>
                <title>Mi web</title>
            </head>
            <body>
                <h1>Inicio</h1>
            </body>
            </html>
    `)
})

app.get('/productos', function (peticion, respuesta) {
    respuesta.send(`
            <html>
            <head>
                <title>Mi web</title>
            </head>
            <body>
                <h1>Productos</h1>
            </body>
            </html>
    `)
})
 
app.listen(3000, function () {
    console.log("Servidor online en puerto 3000")
})