const express =  require('express');
const mongoose = require('mongoose');
const config =   require('./config/dev');
const DummyDb = require('./dummy-db');

console.log('from index.js file in the Server');

const rentalRoutes = require('./routes/rentals');

// Connects to mongoDB in the Atlas cloud database
mongoose.connect(config.DB_URI).then(() => {
  const dummyDb = new DummyDb();
  dummyDb.seedDb();
});

const app = express();

app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('\nExpress server is running\n');
});
