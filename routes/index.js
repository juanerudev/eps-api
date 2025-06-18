const express = require('express');
const pacienteRouter = require('./paciente.router');
const doctorRouter = require('./doctor.router');

const routerApi = (app) => {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/pacientes', pacienteRouter);
    router.use('/doctores', doctorRouter);
}

module.exports = routerApi;