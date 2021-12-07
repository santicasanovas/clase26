const http = require('http')
let server = http.createServer( function(peticion,respuesta) {
    // req,res

    if (peticion.url == "/") {
        respuesta.writeHead(200, {'Content-Type':'text/html'})

        respuesta.write(`
            <html>
            <head>
                <title>Mi web</title>
            </head>
            <body>
                <h1>Inicio de mi página</h1>
            </body>
            </html>
        `)
        respuesta.end()
    } else if (peticion.url == "/productos") {
        respuesta.writeHead(200, {'Content-Type':'text/html'})

        respuesta.write(`
            <html>
            <head>
                <title>Mi web</title>
            </head>
            <body>
                <h1>Productos</h1>
            </body>
            </html>
        `)
        respuesta.end()
    } else {
        respuesta.writeHead(404, {'Content-Type':'text/html'})

        respuesta.write(`
            <html>
            <head>
                <title>Mi web</title>
            </head>
            <body>
                <h1>URL NO VÁLIDA</h1>
            </body>
            </html>
        `)
        respuesta.end()
    }

})
server.listen(3000, function() {
    console.log("SERVIDOR ONLINE EN PUERTO 3000") })