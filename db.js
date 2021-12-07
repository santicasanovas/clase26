const mysql = require('mysql')
const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyecto_clase26'
})
connection.connect( function (err) { if (err) {throw err}
console.log(err)
})


module.exports = connection