const express = require('express');
const router = express();

const pacienteService = require('../services/paciente.service');

router.get('/', async (req, res) => {
    const pacientes = await pacienteService.find();
    res.json(pacientes);
});

module.exports = router;