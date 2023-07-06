const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarios');
const verifyToken = require('../middlewares/verifyToken');

router.get('/admin', verifyToken.verifyToken, usuarioController.getAdmin);
router.post('/login', usuarioController.login);
router.post('/registrar', usuarioController.registrar);

module.exports = router;
