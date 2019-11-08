var exprees = require('express')
var router = exprees.Router()
var Drug = require('../models/drug')

router.get('/', (req, res) => {
    console.log('in drugs get')
    Drug.find((err, drugs) => {
        if (err) return res.json(err)
        else res.json(drugs)
    })
})

router.get('/:id', (req, res) => {
    Drug.findById(req.params.id, (err, drug) => {
        if (err) return res.json(err)
        else return res.json(drug)
    })
})

router.post('/', (req, res) => {
    console.log(req.body)
    var drugInfo = {
        name: req.body.name,
        generic_name: '',
        manufacturer_name: '',
        dosage_and_administration: [''],
        country_of_origin: '',
    }
    Drug.create(drugInfo, (err, drug) => {
        if (err) return res.json(err)
        else return res.json(drug)
    })
})

router.patch('/:id', (req, res) => {
    Drug.findByIdAndUpdate(req.params.id, req.body, (err, drug) => {
        if (err) return res.json(err)
        else return res.json(drug)
    })
})

router.delete('/:id', (req, res) => {
    Drug.findByIdAndDelete(req.params.id, (err, drug) => {
        if (err) return res.json(err)
        else return res.json(drug)
    })
})

module.exports = router