const express = require('express');
const router = express();

const doctorService = require('../services/doctor.service');

router.get('/', async (req, res) => {
    const doctores = await doctorService.find();
    res.json(doctores);
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const doctor = await doctorService.findOne(id);
        res.json(doctor);
    } catch (err) {
        res.status(404).json(err.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const nuevodoctor = await doctorService.create(body);
        res.status(201).json(nuevodoctor);
    } catch (err) {
        res.status(400).json(err.message);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const doctor = await doctorService.update(id, body);
        res.json(doctor);
    } catch (err) {
        res.status(404).json(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await doctorService.delete(id);
        res.json(rta);
    } catch (err) {
        res.status(404).json(err.message);
    }
});

module.exports = router;