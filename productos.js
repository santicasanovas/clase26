
const productos = [
{id: 1, prod: 'Producto Nº 1'},
{id: 2, prod: 'Producto Nº 2'},
{id: 3, prod: 'Producto Nº 3'},
]

const all = ()=> {return  productos }

const find = (id) => { return productos.find(function (producto) {
    if (producto.id == id) { return true}


    }) }

module.exports = { all, find }
