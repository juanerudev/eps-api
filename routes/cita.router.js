const express = require('express');
const router = express();

const citaService = require('../services/cita.service');

router.get('/', async (req, res) => {
    const citas = await citaService.find();
    res.json(citas);
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const cita = await citaService.findOne(id);
        res.json(cita);
    } catch (err) {
        res.status(404).json(err.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const nuevacita = await citaService.create(body);
        res.status(201).json(nuevacita);
    } catch (err) {
        res.status(400).json(err.message);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const cita = await citaService.update(id, body);
        res.json(cita);
    } catch (err) {
        res.status(404).json(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await citaService.delete(id);
        res.json(rta);
    } catch (err) {
        res.status(404).json(err.message);
    }
});

module.exports = router;