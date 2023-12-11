const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authController');

router.get('/auth/login', authControllers.login);
router.post('/auth/login', (req, res) => res.send('Route for login post View'));
router.get('/auth/register', authControllers.register);
router.post('/auth/register', (req, res) => res.send('Route for register post View'));
router.get('/auth/logout', authControllers.logout);


module.exports = router;