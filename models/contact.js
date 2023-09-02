const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
        trim: true,
    },
    number: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Contact = new mongoose.model("Contacts", contactSchema);
module.exports = Contact;