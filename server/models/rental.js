const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
  title: { type: String, required: true, max: [128, 'Too long, max is 128 charachters'] },
  city: { type: String, required: true, lowercase: true, max: [64, 'Too long, max is 64 charachters'] },
  street: { type: String, required: true, lowercase: true, max: [64, 'Too long, max is 64 charachters'] },
  category: { type: String, required: true, lowercase: true },
  type: { type: String, required: true, lowercase: true },
  images: { type: [String], required: true },
  bedrooms: Number,
  shared: Boolean,
  description: { type: String, required: true },
  dailyRate: Number,
  createdAt: { type: Date, default: Date.new },
});

module.exports = mongoose.model('Rental', rentalSchema);
