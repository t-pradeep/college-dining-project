const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Stations = Object.freeze({
    Mongolian: 'mongolian',
    DishReturn: 'dish return',
    Utility: 'utility',
    TrueBalance: 'true balance',
    Mediterian: 'mediterian',
    Bakery: 'bakery',
    Grill: 'grill',
    Produce: 'produce',
    Entree: 'entree',
    TexMex: 'tex mex'
});

const subrequestSchema = new Schema({
    name: { type: String, required: true, trim: true, minlength: 3 },
    day: { type: Date, required: true, trim: true, minlength: 3 },
    timing: { type: String, required: true, trim: true },
    station: { type: String, enum: Object.values(Stations) }

}, {
    timestamps: true,
});

const Subrequest = mongoose.model('Subrequest', subrequestSchema);

module.exports = Subrequest;

