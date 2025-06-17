const express = require('express');
const pacienteRouter = require('./paciente.router');

const routerApi = (app) => {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/pacientes', pacienteRouter);
}

module.exports = routerApi;