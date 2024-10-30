const Router = require('express');

// API middlewares
const { createSupAPI, viewSupAPI, updateSupAPI, deleteSupAPI} = require('../api/sup.api');

// Inicializar router
const router = Router();

// Rutas post
router.post('/proveedor/createSup', createSupAPI);

// Rutas get
router.get('/proveedor/viewSup', viewSupAPI);

// Rutas put
router.put('/proveedor/updateSup', updateSupAPI);

// Rutas delete
router.delete('/proveedor/deleteSup', deleteSupAPI);

module.exports = router;
