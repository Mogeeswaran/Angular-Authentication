
const mongoose = require('mongoose');

var Register = mongoose.model('RegisterUsers', {
    fname: { type: String },
    lname: {type : String},
    Email: { type: String },
    password: {type: String}
});
module.exports = { Register }