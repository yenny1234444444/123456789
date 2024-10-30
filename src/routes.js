const Router = require('express');
const router = Router();

// Import routes
const authRoutes = require('./modules/auth/routes/auth.routes.js');
const productosRoutes = require('./modules/productos/routes/pro.routes.js');

// status api endpoint
router.get('/api-status', (req, res) => {
  return res.send({ 'Status': 'on' })
})

// User routes
router.use(authRoutes);
router.use(productosRoutes);

module.exports = router;