const connection = require('../db')
const {validationResult } = require('express-validator')

const index = (req, res) => {
    req.session.user_id= 1
    connection.query('SELECT id, modelo, marca FROM productos', (error, results) => {
        if (error) {
            throw error
        } 
        console.log (results)
        res.render('productos/index', {productos: results})
    })

} 

const detalle = (req, res) => {
    /*console.log(req.session.user_id)*/
    connection.query('SELECT * FROM productos WHERE id = ?',  [req.params.nro], (error, result) => {
        if (error) {
            throw error
        } 
        if (result.length >0) {
        res.render('productos/detalle', {producto: result [0]}) }
        else { res.send('Producto no encontrado')}
        
    })  
}

const crear = (req, res) => {
    res.render('productos/crear',{ values: {} })
}

const store = (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.render('productos/crear', {values: req.body, errors: errors.array()}) /*vuelve a mostrar el formulario */
        
    } else {
         connection.query('INSERT INTO productos SET ?', {marca: req.body.marca, modelo: req.body.modelo, descripcion: req.body.descripcion}, (error) => {
    if (error) {
        throw error
    }
        res.redirect('/productos')
})}
       
}

const editar =(req, res) => {
    //res.render('productos/editar',{ values: {} })//
    connection.query('SELECT * FROM productos WHERE id = ?',  [req.params.nro], (error, result) => {
        if (error) {
            throw error
        } 
        if (result.length >0) {
        res.render('productos/editar', {values: {}, producto: result [0]}) }
        else { res.send('Producto no encontrado')}
        
    }) 
}

const update =(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.render('productos/editar', {values: req.body, errors: errors.array(), producto: {}}) /*vuelve a mostrar el formulario */
        
    } else {
         connection.query('UPDATE productos SET ? WHERE ID = ?', [{marca: req.body.marca, modelo: req.body.modelo, descripcion: req.body.descripcion}, req.body.id ], (error) => {
    if (error) {
        throw error
    }
        res.redirect('/productos')
})}
}

const destroy = (req, res) => {
    connection.query('DELETE FROM productos WHERE id = ?', [req.params.nro ], (error) => {
        if (error) {
            throw error }
    res.redirect('/productos')  
        })}

module.exports = { index, detalle, crear, store, editar, update, destroy}







