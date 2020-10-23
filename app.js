const express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

require('dotenv').config();

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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
const mainRoute = require('./routes/index');
app.use(mainRoute);

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) {
    console.log('Error: ' + err);
  }
  console.log('Server is running on port ' + port);
});
