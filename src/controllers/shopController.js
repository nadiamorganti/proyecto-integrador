const path = require('path');
const { getAll } = require('../models/product.model');
const json = [
    {
       product_id: 1,
       licence_name: "Star Wars",
       category_name: "Figuras coleccionables",
       product_name: "Baby Yoda Bluebell",
       product_description: "Figura coleccionable de Baby Yoda (Grogu)",
       product_price: 1799.99,
       dues: 10,
       product_sku: "STW001001",
       img_front: "/multimedia/star-wars/baby-yoda-1.webp",
       img_back: "/multimedia/star-wars/baby-yoda-box.webp"
    },

    {
       product_id: 2,
       licence_name: "Star Wars",
       category_name: "Figuras coleccionables",
       product_name: "Boba Fett Fighter",
       product_description: "Figura coleccionable Boba Fett Fighter",
       product_price: 1999.99,
       dues: 6,
       product_sku: "STW001002",
       img_front: "/multimedia/star-wars/bobbafeth-1.webp",
       img_back: "/multimedia/star-wars/bobbafeth-box.webp"
    },

    {
        product_id: 3,
        licence_name: "Star Wars",
        category_name: "Figuras coleccionables",
        product_name: "Luke Skylwalker & Grogu",
        product_description: "Figura coleccionable de Luke Skylwalker star-wars",
        product_price: 1799.99,
        dues: 10,
        product_sku: "STW001003",
        img_front: "/multimedia/star-wars/luke-1.webp",
        img_back: "/multimedia/star-wars/luke-box.webp"
    },

    {
        product_id: 4,
        licence_name: "Star Wars",
        category_name: "Figuras coleccionables",
        product_name: "Stormtrooper Lightsaber",
        product_description: "Figura coleccionable de Stormtrooper Lightsaber",
        product_price: 1799.99,
        dues: 10,
        product_sku: "STW001004",
        img_front: "/multimedia/star-wars/trooper-1.webp",
        img_back: "/multimedia/star-wars/trooper-box.webp"
    },

    {
        product_id: 5,
        licence_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Charmander Smiley",
        product_description: "Figura coleccionable de Charmander ",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001001",
        img_front: "/multimedia/pokemon/charmander-1.webp",
        img_back: "/multimedia/pokemon/charmander-box.webp"
    },      
                  
    {
        product_id: 6,
        licence_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Dragonite Hi!",
        product_description: "Figura coleccionable Dragonite",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001002",
        img_front: "/multimedia/pokemon/dragonite-1.webp",
        img_back: "/multimedia/pokemon/dragonite-box.webp"
    },
                        
   {
        product_id: 7,
        licence_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto Flying",
        product_description: "Figura coleccionable de Pidgeotto Flying ",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001007",
        img_front: "/multimedia/pokemon/pidgeotto-1.webp",
        img_back: "/multimedia/pokemon/pidgeotto-box.webp"
    },

    {
        product_id: 8,
        licence_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pikachu Smiley",
        product_description: "Figura coleccionable Pikachu",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001008",
        img_front: "/multimedia/pokemon/pikachu-1.webp",
        img_back: "/multimedia/pokemon/pikachu-box.webp"
    },

    {
        product_id: 9,
        licence_name: "Harry Potter",
        category_name: "Figuras coleccionables",
        product_name: "Snape Patonus",
        product_description: "Figura coleccionable de Snape Patronus",
        product_price: 1799.99,
        dues: 10,
        product_sku: "HPT001004",
        img_front: "/multimedia/harry-potter/snape-patronus-1.webp",
        img_back: "/multimedia/harry-potter/snape-patronus-box.webp"
    },

                                    

    ];

module.exports = {
    shop: async (req, res) => { 
        
        const data = await getAll();

        console.log(data);
        
        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
            data
        });
    },
    item: (req, res) => {
        const itemId = req.params.id;
        const item = json.find(item => item.product_id == itemId);

        res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
            item
        });

    },
    cart: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/carrito.ejs'), {
            cart
        });
    },

    addItem: (req, res) => res.send('Esta es la ruta para AGREGAR un NUEVO ITEM'),
    addToCart: (req, res) => res.send('Esta es la ruta para AGREGAR un ITEM al Item')
}