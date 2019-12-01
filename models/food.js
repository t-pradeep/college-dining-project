const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  foodName: { type: String, required: true },
  foodDesc: { type: String, required: true },
  foodDay: { type: Date, required: true },
  departureTime: { type: String, required: true },
  noOfSeats:     { type: Number, required: true },
  arrivalPlace:  { type: String, required: true },
  arrivalDate:     { type: Date, required: true },
  arrivalTime:     { type: String, required: true },
}, {
  timestamps: true,
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;

