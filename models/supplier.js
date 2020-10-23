const mongoose = require('mongoose');
const { Schema } = mongoose;

let supplierSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

const Supplier = mongoose.model('Supplier', supplierSchema);
module.exports = Supplier;
