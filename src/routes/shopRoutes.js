const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopController');

router.get('/', shopControllers.shop)
router.get('/item/:id',shopControllers.item)
router.post('/item/add/:id',shopControllers.itemAdd)
router.get('/cart',shopControllers.cart)
router.post('/cart',shopControllers.cartPost)

module.exports = router;
