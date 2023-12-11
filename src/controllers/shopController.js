const shopControllers = {
    shop: (req, res) => res.send('Route for Shop View'),
    item: (req, res) => res.send('Route for find and retrieve a product from an ID'),
    cart: (req, res) => res.send('Route for cart view')
}


module.exports = shopControllers;