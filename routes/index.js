// aqui importo el controlador y exporto el router
const express = require('express');
const router = express.Router();

const containerFunctions = require('../controllers/products.controller');

/**
 * This list all the products
 */
router.get('/productos', containerFunctions.getAll);

/**
 * This return a random product
 */
router.get('/productoRandom', containerFunctions.getRandom);

module.exports = router;