const express = require('express');
const router = express();

const pacienteService = require('../services/paciente.service');

router.get('/', async (req, res) => {
    const pacientes = await pacienteService.find();
    res.json(pacientes);
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const paciente = await pacienteService.findOne(id);
        res.json(paciente);
    } catch (err) {
        res.status(404).json(err.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const nuevoPaciente = await pacienteService.create(body);
        res.status(201).json(nuevoPaciente);
    } catch (err) {
        res.status(400).json(err.message);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const paciente = await pacienteService.update(id, body);
        res.json(paciente);
    } catch (err) {
        res.status(404).json(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await pacienteService.delete(id);
        res.json(rta);
    } catch (err) {
        res.status(404).json(err.message);
    }
});

module.exports = router;