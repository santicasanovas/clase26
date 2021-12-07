const express = require ('express')
const router = express.Router()
const productos = require ('../productos')
const { body } = require('express-validator')
const controller = require ('../controller/controller')

/*router.get('/', (req, res) => {
res.send('Hola Express')
    })*/


//rutas para editar
router.get('/productos/:nro/editar', controller.editar)
router.put('/productos/update', [
    body ('marca', 'Ingresar marca').exists().isLength(3).trim().escape(),
    body ('modelo', 'Ingresar modelo').exists().isLength(2).trim().escape(),
    body ('descripcion', 'Ingrsar descripcion').exists().notEmpty().escape()],
     controller.update)

//ruta para borrar un registro
router.delete('/productos/:nro/borrar', controller.destroy)     

// rutas para crear registros en la base de datos
router.get('/productos/crear', controller.crear)  
router.post('/productos/store', [
    body ('marca', 'Ingresar marca').exists().isLength(3).trim().escape(),
    body ('modelo', 'Ingresar modelo').exists().isLength(2).trim().escape(),
    body ('descripcion', 'Ingrsar descripcion').exists().notEmpty().escape()],
     controller.store) 


//rutas para leer en la base de datos
router.get('/productos/', controller.index)
  
/*router.get('/Producto/:id', (req, res) => {
res.send('Producto ID: ' + req.params.id)
})   */

router.get('/productos/:nro', controller.detalle)


module.exports = router