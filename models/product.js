const mongoose = require('mongoose');
const { Schema } = mongoose;

let productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, min: 0, required: true },
  category: { type: String, lowercase: true, required: true },
  expDate: { type: Date, required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: [dairy, fruit, vegetable] },
  supplier: { type: Schema.Types.ObjectId, ref: 'Supplier' },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
