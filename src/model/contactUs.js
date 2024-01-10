const mongoose = require('mongoose');


const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!..."],
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    }, 
    message:  {
        type: String,
        required: true,
    }
});

const contact = new mongoose.model('contact', contactUsSchema);

module.exports = contact;