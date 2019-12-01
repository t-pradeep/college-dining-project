const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const user = require('./routes/user');
const food = require('./routes/food');
const subrequest = require('./routes/subrequest');
const equipment = require('./routes/equipment');
app.use('/users', user);
app.use('/foods', food);
app.use('/subrequests',subrequest);
app.use('/equipments',equipment);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});