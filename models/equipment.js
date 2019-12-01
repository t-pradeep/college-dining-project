const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
  orderNumber: { type: Number, required: true, trim: true},
  equipmentName: { type: String, required: true, trim: true},
  date: { type: Date, required: true, trim: true }

}, {
  timestamps: true,
});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;

