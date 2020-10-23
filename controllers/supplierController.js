const Supplier = require('../models/supplier');

//show route
exports.Show = async function (req, res) {
  const supplier = await Supplier.findById(req.params.sup_id);
  res.status(200).json(supplier);
};
// ------------------------
//CRUD
exports.Create = async function (req, res) {
  const supplier = new Supplier({
    name: req.body.name,
    email: req.body.email,
    city: req.body.city,
  });
  await supplier.save((err) => {
    if (err) return res.status(500).json(err);
    return res.status(201).json(supplier);
  });
};

exports.Read = async function (req, res) {
  await Supplier.find({}, (err, supplier) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(supplier);
  });
};

exports.Update = async function (req, res) {
  await Supplier.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, supplier) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(supplier);
    }
  );
};

exports.Delete = async function (req, res) {
  await Supplier.findByIdAndDelete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    const response = {
      message: 'Supplier successfuly deleted',
      id: req.params.id,
    };
    return res.status(200).json(response);
  });
};
