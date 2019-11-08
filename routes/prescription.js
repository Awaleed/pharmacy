var express = require('express');
var router = express.Router();
var Prescription = require('../models/prescription')

router.get('/', (req, res) => {
  console.log('in prescriptions get')
  Prescription.
    find().
    populate('patient').
    populate('drugs/drug').
    exec(function (err, prescriptions) {
      if (err) return handleError(err);
      return res.json(prescriptions)
    });
})

router.get('/:id', (req, res) => {
  // Prescription.findById(req.params.id, (err, prescription) => {
  //   if (err) return res.json(err)
  //   else return res.json(prescription)
  // })
  Prescription.
    findOne({ _id: req.params.id }).
    populate('patient').
    populate('drugs/drug').
    exec(function (err, prescription) {
      if (err) return handleError(err);
      console.log('The patient is %s', prescription.patient.name);
      return res.json(prescription)
    });
})

router.post('/', (req, res) => {

  var prescriptionInfo = {
    patient: req.body.patient,
    diagnosis: '',
    drugs: req.body.drugs.map(o => ({ drug: o.drug, dosage: 'from js' }))
  }
  Prescription.create(prescriptionInfo, (err, prescription) => {
    if (err) return res.json(err)
    else return res.json(prescription)
  })
})

router.patch('/:id', (req, res) => {
  Prescription.findByIdAndUpdate(req.params.id, req.body, (err, prescription) => {
    if (err) return res.json(err)
    else return res.json(prescription)
  })
})

router.delete('/:id', (req, res) => {
  Prescription.findByIdAndDelete(req.params.id, (err, prescription) => {
    if (err) return res.json(err)
    else return res.json(prescription)
  })
})

router.delete('/all', (req, res) => {
  Prescription.deleteMany((err, prescription) => {
    if (err) return res.json(err)
    else return res.json(prescription)
  })
})

module.exports = router