const { Schema, model } = require('mongoose');

const instrumentSchema = new Schema({
    description: {
        type: String,
        minlength: 10,
        maxlength: 250,
        required: [true, 'Please input a description']
    },
    brand: {
        type: String,
        minlength: 2,
        maxlength: 250,
        required: [true, 'Please input a brand']
    },
    price: {
        type: Number,
        required: [true, 'Please input a price']
    },
}, { timestamps: true });

const Instrument = model('Instrument', instrumentSchema);

module.exports = Instrument;