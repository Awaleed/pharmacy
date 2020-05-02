var express = require('express');
var router = express.Router();
var Patient = require('../models/patient');
var authentecate = require('../middelwares/authentecate');

router.get('/', authentecate, (req, res) => {
    console.log('in patient get')
    Patient.find({user: req.user._id},(err, patients) => {
        if (err) return res.json(err)
        else res.json(patients)
    })
})

router.get('/:id', (req, res) => {
    Patient.findById(req.params.id, (err, patient) => {
        if (err) return res.json(err)
        else return res.json()
    })
})

router.post('/', authentecate, (req, res) => {
    console.log(req.body);
    var patientInfo = {
        user: req.user._id,
        name: req.body.name,
        phone_number: 0,
        location: { long: 0, lat: 0 },
        initial_diagnosis: '',
        prescriptions: []
    }
    Patient.create(patientInfo, (err, patient) => {
        if (err) return res.json(err)
        else return res.json(patient)
    })
})

router.patch('/:id', (req, res) => {
    Patient.findByIdAndUpdate(req.params.id, req.body, (err, patient) => {
        if (err) return res.json(err)
        else return res.json(patient)
    })
})

router.delete('/:id', (req, res) => {
    Patient.findByIdAndDelete(req.params.id, (err, patient) => {
        if (err) return res.json(err)
        else return res.json(patient)
    })
})

module.exports = router