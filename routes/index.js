const express = require('express');
const router = express.Router();
const Supplier = require('../models/supplier');
const Product = require('../models/product');

// landing
router.get('/', async (req, res) => {
  await res.send('Welcome to the main page');
});

//SUPPLIER ROUTES
//CRUD
//CREATE
router.post('/supplier', async (req, res) => {
  const supplier = new Supplier({
    name: req.body.name,
    email: req.body.email,
    city: req.body.city,
  });
  await supplier.save((err) => {
    if (err) return res.status(500).json(err);
    return res.status(201).json(supplier);
  });
});

//READ
router.get('/supplier', async (req, res) => {
  await Supplier.find({}, (err, supplier) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(supplier);
  });
});

//UPDATE
router.put('/supplier/:id', async (req, res) => {
  await Supplier.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, supplier) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(supplier);
    }
  );
});

//DELETE
router.delete('/supplier/:id', async (req, res) => {
  await Supplier.findByIdAndDelete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    const response = {
      message: 'Supplier successfuly deleted',
      id: req.params.id,
    };
    return res.status(200).json(response);
  });
});

//show ROUTE
router.get('/supplier/:sup_id', async (req, res) => {
  const supplier = await Supplier.findById(req.params.sup_id);
  res.status(200).json(supplier);
});
// ------------------------------
//PRODUCT
//CRUD
//CREATE
router.post('/supplier/:sup_id/product', async (req, res) => {
  await Supplier.findById(req.params.sup_id, (err, supplier) => {
    if (err) return res.status(400).json(err);
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      expDate: req.body.expDate,
      amount: req.body.amount,
    });
    supplier.products.push(product);
    product.supplier = supplier;
    supplier.save();
    product.save();
    res.status(201).json(supplier);
  });
});

//READ
router.get('/supplier/:sup_id/product', async (req, res) => {
  await Supplier.findById(req.params.sup_id, (err, supplier) => {
    if (err) return res.status(400).json(err);
    res.status(200).json(supplier);
  });
});

//UPDATE
router.put('/supplier/:sup_id/product/:prod_id', async (req, res) => {
  await Supplier.findById(req.params.sup_id, (err, supplier) => {
    if (err) return res.status(400).json(err);
    Product.findByIdAndUpdate(
      req.params.prod_id,
      req.body,
      { new: true },
      (err, product) => {
        if (err) return res.status(400).json(err);
        res.status(200).json(supplier);
      }
    );
  });
});

//DELETE
router.delete('/supplier/:sup_id/product/:prod_id', async (req, res) => {
  await Supplier.findById(req.params.sup_id, (err, supplier) => {
    if (err) return res.status(400).json(err);
    Product.findByIdAndDelete(req.params.prod_id, (err) => {
      if (err) return res.status(400).json(err);
      const response = {
        message: 'Product successfuly deleted',
        id: req.params.prod_id,
      };
      return res.status(200).json(response);
    });
  });
});

// --------------------------------------------
//show
router.get('/supplier/:sup_id/product/:prod_id', async (req, res) => {
  await Supplier.findById(req.params.sup_id, (err, supplier) => {
    if (err) return res.status(400).json(err);
    Product.findById(req.params.prod_id, (err, product) => {
      if (err) return res.status(400).json(err);
      res.status(200).json(product);
    });
  });
});

module.exports = router;
