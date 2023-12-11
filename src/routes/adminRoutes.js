const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminController')

router.get('/admin', adminControllers.admin);
router.get('/admin/create', adminControllers.create);
router.post('/admin/create', (req, res) => res.send('Route for add the current create to the admin'));
router.get('/admin/edit/:id', adminControllers.edit);
router.put('/admin/edit/:id', adminControllers.put);
router.delete('/admin/delete/:id', adminControllers.id);

module.exports = router;