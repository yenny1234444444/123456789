const Router = require('express');

// API middlewares
const { createProAPI, viewProAPI, updateProAPI, deleteProAPI} = require('../api/pro.api');

// Inicializar router
const router = Router();

// Rutas post
router.post('/productos/createPro', createProAPI);

// Rutas get
router.get('/productos/viewPro', viewProAPI);

// Rutas put
router.put('/productos/updatePro', updateProAPI);

// Rutas delete
router.delete('/productos/deletePro', deleteProAPI);

module.exports = router;
