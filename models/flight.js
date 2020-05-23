const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {type: String},
    arrival: {type: Date}
});

const flightSchema = new Schema({
    airline: {
        type: String,
    },
    airport: {
        type: String,
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        max: 9999,
        min: 10
    },
    departs: {
        type: Date,
        default: function() {
            const dt = new Date();
            return dt.setFullYear(dt.getFullYear() + 1);
          }
    },
    destinations: [destinationSchema],
});

module.exports = mongoose.model('Flight', flightSchema);