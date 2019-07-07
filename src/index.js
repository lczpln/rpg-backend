const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());

app.use(require('./routes'));

mongoose.connect('mongodb://xxxlucasxxx:lucasxxx123@ds063140.mlab.com:63140/rpg-backend', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port} (:`)
})

module.exports = app;