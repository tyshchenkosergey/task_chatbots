const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
const mongoose = require('mongoose');

//config
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
const mainRoute = require('./routes/index');
const supplierRoute = require('./routes/supplier/supplier');
const productRoute = require('./routes/product/product');
app.use(mainRoute);
app.use(supplierRoute);
app.use(productRoute);

const dbURL = 'mongodb://localhost/store';
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected to DB!');
  })
  .catch((err) => {
    console.log('ERROR:', err.message);
  });

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) {
    console.log('Error: ' + err);
  }
  console.log('Server is running on port ' + port);
});
