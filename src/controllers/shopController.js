const path = require('path');

module.exports = {
    shop: (req, res) => {

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
            img_front: "/img/pokemon/pidgeotto-1.webp",
            img_back: "/img/pokemon/pidgeotto-box.webp"
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
                img_front: "/img/pokemon/charmander-1.webp",
                img_back: "/img/pokemon/charmander-box.webp"
                },

                {
                    product_id: 1,
                    licence_name: "Pokemon",
                    category_name: "Figuras coleccionables",
                    product_name: "Pidgeotto",
                    product_description: "Figura coleccionable pokemon",
                    product_price: 1799.99,
                    dues: 10,
                    product_sku: "PKM001001",
                    img_front: "/img/pokemon/pidgeotto-1.webp",
                    img_back: "/img/pokemon/pidgeotto-box.webp"
                    },

                    {
                        product_id: 1,
                        licence_name: "Pokemon",
                        category_name: "Figuras coleccionables",
                        product_name: "Pidgeotto",
                        product_description: "Figura coleccionable pokemon",
                        product_price: 1799.99,
                        dues: 10,
                        product_sku: "PKM001001",
                        img_front: "/img/pokemon/pidgeotto-1.webp",
                        img_back: "/img/pokemon/pidgeotto-box.webp"
                        },

                        {
                            product_id: 1,
                            licence_name: "Pokemon",
                            category_name: "Figuras coleccionables",
                            product_name: "Pidgeotto",
                            product_description: "Figura coleccionable pokemon",
                            product_price: 1799.99,
                            dues: 10,
                            product_sku: "PKM001001",
                            img_front: "/img/pokemon/pidgeotto-1.webp",
                            img_back: "/img/pokemon/pidgeotto-box.webp"
                            },      
                          
                            {
                                product_id: 1,
                                licence_name: "Pokemon",
                                category_name: "Figuras coleccionables",
                                product_name: "Pidgeotto",
                                product_description: "Figura coleccionable pokemon",
                                product_price: 1799.99,
                                dues: 10,
                                product_sku: "PKM001001",
                                img_front: "/img/pokemon/pidgeotto-1.webp",
                                img_back: "/img/pokemon/pidgeotto-box.webp"
                                },
                                
                                {
                                    product_id: 1,
                                    licence_name: "Pokemon",
                                    category_name: "Figuras coleccionables",
                                    product_name: "Pidgeotto",
                                    product_description: "Figura coleccionable pokemon",
                                    product_price: 1799.99,
                                    dues: 10,
                                    product_sku: "PKM001001",
                                    img_front: "/img/pokemon/pidgeotto-1.webp",
                                    img_back: "/img/pokemon/pidgeotto-box.webp"
                                    },

                                    {
                                        product_id: 1,
                                        licence_name: "Pokemon",
                                        category_name: "Figuras coleccionables",
                                        product_name: "Pidgeotto",
                                        product_description: "Figura coleccionable pokemon",
                                        product_price: 1799.99,
                                        dues: 10,
                                        product_sku: "PKM001001",
                                        img_front: "/img/pokemon/pidgeotto-1.webp",
                                        img_back: "/img/pokemon/pidgeotto-box.webp"
                                        },

                                        {
                                            product_id: 1,
                                            licence_name: "Pokemon",
                                            category_name: "Figuras coleccionables",
                                            product_name: "Pidgeotto",
                                            product_description: "Figura coleccionable pokemon",
                                            product_price: 1799.99,
                                            dues: 10,
                                            product_sku: "PKM001001",
                                            img_front: "/img/pokemon/pidgeotto-1.webp",
                                            img_back: "/img/pokemon/pidgeotto-box.webp"
                                            },

                                            

            ];

        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
            data
        });
    },
    item: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/item.ejs'));

    },
    cart: (req, res) => res.send('Esta es la vista del CARRITO'),
    addItem: (req, res) => res.send('Esta es la ruta para AGREGAR un NUEVO ITEM'),
    addToCart: (req, res) => res.send('Esta es la ruta para AGREGAR un ITEM al Item')
}