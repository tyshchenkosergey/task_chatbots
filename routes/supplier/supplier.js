const express = require('express');
const router = express.Router();
const supplierController = require('../../controllers/supplierController');

//show ROUTE
router.get('/supplier/:sup_id', supplierController.Show);
// ---------------------------------------------------
//CRUD
//CREATE
router.post('/supplier', supplierController.Create);

//READ
router.get('/supplier', supplierController.Read);

//UPDATE
router.put('/supplier/:id', supplierController.Create);

//DELETE
router.delete('/supplier/:id', supplierController.Delete);
module.exports = router;
