const Router = require('express');

// API middlewares
const { createUserAPI, viewUsersAPI, updateUserAPI, deleteUserAPI, loginUserAPI} 
    = require('../api/auth.api');

// Inicializar router
const router = Router();

// Rutas post
router.post('/auth/createUser', createUserAPI);
router.post('/auth/loginUser', loginUserAPI);

// Rutas get
router.get('/auth/viewUsers', viewUsersAPI);

// Rutas put
router.put('/auth/updateUser', updateUserAPI);

// Rutas delete
router.delete('/auth/deleteUser', deleteUserAPI);

module.exports = router;
