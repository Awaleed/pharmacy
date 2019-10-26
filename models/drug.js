var mongoose = require('mongoose')

var drugSchema = mongoose.Schema(
    {
        name: String,
        generic_name: String,
        manufacturer_name: String,
        dosage_and_administration: Array,
        country_of_origin: String,
    }
)

module.exports = mongoose.model('Drug', drugSchema)