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

module.exports = router;
