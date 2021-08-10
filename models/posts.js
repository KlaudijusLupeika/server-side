const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    price: Number,
    contactNumber: String,

    make: String,
    model: String,
    doors: Number,
    seats: Number,
    engineCapacity: Number,
    driveType: String,
    emissionClass: String,
    vin: String,
    firstRegistration: Date,
    transmission: String,
    power: Number,
    fuel: String,
    body: String,
    color: String,
    description: String,
    created:{
        type: Date,
        default: Date.now
    },
    image: String
    
});
module.exports = mongoose.model('Post', postSchema);