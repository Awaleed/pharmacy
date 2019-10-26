var mongoose = require('mongoose')

var patientSchema = mongoose.Schema(
    {
        name: String,
        phone_number: Number,
        location: { long: Number, lat: Number },
        initial_diagnosis: String,
        prescriptions: [ObjectId]
    }
)

module.exports = mongoose.model('Patient', patientSchema)