var mongoose = require('mongoose')

var patientSchema = mongoose.Schema(
    {
        user:{ type: mongoose.ObjectId, ref: 'User', required: true },
        name: { type: String, required: true },
        phone_number: Number,
        location: { long: Number, lat: Number },
        initial_diagnosis: String,
        prescriptions: [{ type: mongoose.ObjectId, ref: 'Prescription', required: true }]
    }
)

module.exports = mongoose.model('Patient', patientSchema)