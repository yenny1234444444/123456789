const Router = require('express');

// API middlewares
const { createComAPI, viewComAPI, updateComAPI, deleteComAPI} = require('../api/com.api');

// Inicializar router
const router = Router();

// Rutas post
router.post('/comprar/createCom', createComAPI);

// Rutas get
router.get('/comprar/viewCom', viewComAPI);

// Rutas put
router.put('/comprar/updateCom', updateComAPI);

// Rutas delete
router.delete('/comprar/deleteCom', deleteComAPI);

module.exports = router;
