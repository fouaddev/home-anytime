const express = require('express');
const router  = express.Router();
const Rental  = require('../models/rental');

// Creates a route for the root path '/' to get all rentals
router.get('', (req, res) => {
  
  console.log('from index.js file in the Server');
  
  // Uses mongoose method find() to get all rentals
  Rental.find({}, (err, rentals) => {
    res.json(rentals);
  });
});

// Creates a route for id path to get the corresponding rental
router.get('/:rentalID', (req, res) => {
  const id = req.params.rentalID;

  // Uses mongoose method findById() to get rental based it its id
  Rental.findById(id, (err, rental) => {
    if(err) {
      res.status(422).send({errors: [ {title: 'Rental Error', detail: 'Could not find Rental'} ]});
    }
    res.json(rental);
  });
});

module.exports = router;
