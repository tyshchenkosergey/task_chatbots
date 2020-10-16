const express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  methodOverride = require('method-override');

require('dotenv').config();

mongoose
  .connect(process.env.ATLAS_URL, {
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

//routes
app.get('/', (req, res) => {
  res.send('Welcome to the main page');
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('Error: ' + err);
  }
  console.log('Server is running on ' + process.env.PORT + ' port');
});
