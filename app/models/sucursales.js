const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = mongoose.model('sucursales', new Schema({
    name: { type: String },
    address: { type: String },
    city: { type: String },
    phone: { type: Number }
}, { timestamps: true, versionKey: false }));