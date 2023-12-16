const path = require('path');

module.exports = {
    shop: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'));
    },
    item: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/item.ejs'));

    },
    cart: (req, res) => res.send('Esta es la vista del CARRITO'),
    addItem: (req, res) => res.send('Esta es la ruta para AGREGAR un NUEVO ITEM'),
    addToCart: (req, res) => res.send('Esta es la ruta para AGREGAR un ITEM al CARRITO')
}