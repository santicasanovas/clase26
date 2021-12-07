const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')

router.get('/contactos', (req, res) => {
    res.render('contacto', { values: {}})
})

router.post('/contacto', [
body ('Form1', 'Ingresar nombre').exists().isLength(3).trim().escape(),
body ('dni', 'Ingresar dni').exists().isNumeric(),
body ('FNac', 'Fecha de Naciemiento').exists().notEmpty(),
body ('mail', 'Ingresar email').exists().isEmail().normalizeEmail(),
body ('contraseña', 'Ingresar contraseña').exists().notEmpty(),
body ('mensaje', 'Ingrsar mensaje').exists().notEmpty().escape(),
],
(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log(errors)
        res.render('contacto', {values: req.body, errors: errors.array()}) /*vuelve a mostrar el formulario */
        
    } else {
    console.log(req.body)
    res.send('Formulario enviado exitosamente. Gracias ' + req.body.Form1 +' por contactarnos')
} })

module.exports = router
