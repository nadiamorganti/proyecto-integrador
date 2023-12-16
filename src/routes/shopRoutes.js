const express = require('express');
const router = express.Router();

const controller = require('../controllers/shopController');


router.get('/', controller.shop);
router.get('/item/:id', (req, res) => res.send('Esta es la vista del ITEM SELECCIONADO'));
router.post('/item/:id/add', (req, res) => res.send('Esta es la ruta PARA AGREGAR UN NUEVO ITEM'));
router.get('/cart', (req, res) => res.send('Esta es la vista de CARRITO'));
router.post('/cart', (req, res) => res.send('Esta es la ruta para AGREGAR UN ITEM AL CARRITO'));


module.exports = router;

