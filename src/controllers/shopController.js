const path = require('path');

const data = [
    {
       product_id: 1,
       licence_name: "Pokemon",
       category_name: "Figuras coleccionables",
       product_name: "Pidgeotto",
       product_description: "Figura coleccionable pokemon",
       product_price: 1799.99,
       dues: 10,
       product_sku: "PKM001001",
       img_front: "/multimedia/pokemon/pidgeotto-1.webp",
       img_back: "/multimedia/pokemon/pidgeotto-box.webp"
    },

    {
       product_id: 2,
       licence_name: "Pokemon",
       category_name: "Figuras coleccionables",
       product_name: "charmander",
       product_description: "Figura coleccionable pokemon",
       product_price: 1999.99,
       dues: 6,
       product_sku: "PKM001002",
       img_front: "/multimedia/star-wars/baby-yoda-1.webp",
       img_back: "/multimedia/star-wars/baby-yoda-box.webp"
    },

    {
        product_id: 3,
        licence_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable pokemon",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001001",
        img_front: "/multimedia/pokemon/pidgeotto-1.webp",
        img_back: "/multimedia/pokemon/pidgeotto-box.webp"
    },

    {
        product_id: 4,
        licence_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable pokemon",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001001",
        img_front: "/multimedia/pokemon/pidgeotto-1.webp",
        img_back: "/multimedia/pokemon/pidgeotto-box.webp"
    },

    {
        product_id: 5,
        licence_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable pokemon",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001001",
        img_front: "/multimedia/pokemon/pidgeotto-1.webp",
        img_back: "/multimedia/pokemon/pidgeotto-box.webp"
    },      
                  
    {
        product_id: 6,
        licence_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable pokemon",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001001",
        img_front: "/multimedia/pokemon/pidgeotto-1.webp",
        img_back: "/multimedia/pokemon/pidgeotto-box.webp"
    },
                        
   {
        product_id: 7,
        licence_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable pokemon",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001001",
        img_front: "/multimedia/pokemon/pidgeotto-1.webp",
        img_back: "/multimedia/pokemon/pidgeotto-box.webp"
    },

    {
        product_id: 8,
        licence_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable pokemon",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001001",
        img_front: "/multimedia/pokemon/pidgeotto-1.webp",
        img_back: "/multimedia/pokemon/pidgeotto-box.webp"
    },

    {
        product_id: 9,
        licence_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable pokemon",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001001",
        img_front: "/multimedia/pokemon/pidgeotto-1.webp",
        img_back: "/multimedia/pokemon/pidgeotto-box.webp"
    },

                                    

    ];

module.exports = {
    shop: (req, res) => {        
        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
            data
        });
    },
    item: (req, res) => {
        const itemId = req.params.id;
        const item = data.find(item => item.product_id == itemId);

        res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
            item
        });

    },
    cart: (req, res) => res.send('Esta es la vista del CARRITO'),
    addItem: (req, res) => res.send('Esta es la ruta para AGREGAR un NUEVO ITEM'),
    addToCart: (req, res) => res.send('Esta es la ruta para AGREGAR un ITEM al Item')
}