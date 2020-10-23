const Supplier = require('../models/supplier');
const Product = require('../models/product');

//show route
exports.Show = async function (req, res) {
  await Supplier.findById(req.params.sup_id, (err, supplier) => {
    if (err) return res.status(400).json(err);
    Product.findById(req.params.prod_id, (err, product) => {
      if (err) return res.status(400).json(err);
      res.status(200).json(product);
    });
  });
};

// ------------------------
//CRUD
exports.Create = async function (req, res) {
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
};

exports.Read = async function (req, res) {
  await Supplier.findById(req.params.sup_id, (err, supplier) => {
    if (err) return res.status(400).json(err);
    res.status(200).json(supplier);
  });
};

exports.Update = async function (req, res) {
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
};

exports.Delete = async function (req, res) {
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
};
