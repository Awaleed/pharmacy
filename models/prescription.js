var mongoose = require('mongoose')

var prescriptionSchema = mongoose.Schema(
    {
        patientId: ObjectId,
        date: { type: Date, default: Date.now },
        diagnosis: String,
        drugs: [{ drug: ObjectId, dosage: String }]
    }
)

module.exports = mongoose.model('Prescription', prescriptionSchema)