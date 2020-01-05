const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = mongoose.model('cars', new Schema({
    mark: { type: String },
    model: { type: String },
    age: { type: Number },
    price: { type: Number },
    transmision: { type: String }
}, { timestamps: true, versionKey: false }));