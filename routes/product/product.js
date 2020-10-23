const express = require('express');
const router = express.Router();

const productController = require('../../controllers/productController');

//show route
router.get('/supplier/:sup_id/product/:prod_id', productController.Show);

//CREATE
router.post('/supplier/:sup_id/product', productController.Create);

//READ
router.get('/supplier/:sup_id/product', productController.Read);

//UPDATE
router.put('/supplier/:sup_id/product/:prod_id', productController.Update);

//DELETE
router.delete('/supplier/:sup_id/product/:prod_id', productController.Delete);

module.exports = router;
