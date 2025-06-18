const express = require('express');
const router = express();

const historiaService = require('../services/historia.service');

router.get('/', async (req, res) => {
    const historias = await historiaService.find();
    res.json(historias);
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const historia = await historiaService.findOne(id);
        res.json(historia);
    } catch (err) {
        res.status(404).json(err.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const nuevahistoria = await historiaService.create(body);
        res.status(201).json(nuevahistoria);
    } catch (err) {
        res.status(400).json(err.message);
    }
});

module.exports = router;