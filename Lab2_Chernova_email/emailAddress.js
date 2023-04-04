const mongoose = require('mongoose');

const emailAddressSchema = new mongoose.Schema({

    nameE :{ type: String, required: true },
    surname :{ type: String, required: true },
    email: { type: String, required: true }


});

module.exports = mongoose.model('emailAddress', emailAddressSchema);
