const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopController');

router.get('/shop', shopControllers.shop);
router.get('/shop/item/:id', shopControllers.item);
router.post('/shop/item/:id/add', (req, res) => res.send('Route for add the current item to the shop cart'));
router.get('/shop/cart', shopControllers.cart);
router.post('/shop/cart', (req, res) => res.send('Route for go to checkout page'));

module.exports = router;