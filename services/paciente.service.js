const Paciente = require('../models/paciente.model');

exports.find = async () => {
    return await Paciente.find();
}