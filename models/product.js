const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  supplier: { type: String, required: true },
  expDate: { type: Date, required: true },
  amount: { type: Number, required: true },
  type: { type: String, required: true },
  buyer: {
    username: String,
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
