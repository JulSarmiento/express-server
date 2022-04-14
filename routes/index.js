// aqui importo el controlador y exporto el router
const express = require('express');
const router = express.Router();

// Import controller functions
const productsController = require('../controllers/products.controller');

const messageController = require('../controllers/messages.controller');

// Import Multer middleware
const multerMiddleware = require('../middlewares/multer');

const productExist = require('../middlewares/productMiddleware');


/**
 * This list all the products
 */
router.get('/productos', productsController.getAll); 
/**
 * This return a random product
 */
router.get('/producto-random', productsController.getRandom);

/**
 * This return a product by id
 */
router.get('/productos/:id', productExist ,productsController.getById);

/**
 * This save a new product 
 */
router.post('/productos', multerMiddleware.single('thumbnail') ,productsController.save);

/**
 * This update an existent product 
 */
router.put('/productos/:id',[productExist, multerMiddleware.single('thumbnail')], productsController.update);

/**
 * This delete an existent product by its id 
 */
router.delete('/productos/:id', productExist, productsController.deleteById);

/**
 * This list all the messages
 */
router.get('/mensajes', messageController.getAll); 

/**
 * This save a new messages 
 */
router.post('/mensajes', messageController.save);



module.exports = router;