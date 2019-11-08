var mongoose = require('mongoose')

var prescriptionSchema = mongoose.Schema(
    {
        patient: { type: mongoose.ObjectId, ref: 'Patient', required: true },
        date: { type: Date, default: Date.now },
        diagnosis: String,
        drugs: [{ drug: { type: mongoose.ObjectId, ref: 'Drug', required: true }, dosage: String }]
    }
)

module.exports = mongoose.model('Prescription', prescriptionSchema)