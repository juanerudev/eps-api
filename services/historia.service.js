const Historia = require('../models/historia.model');

exports.find = async () => {
    return await Historia.find().populate('paciente').populate('doctor');
}

exports.findOne = async (id) => {
    const historia = await Historia.findById(id).populate('doctor');
    if (!historia) throw new Error('La historia clinica no se encontró');
    return historia;
}

exports.create = async (data) => {
    const { paciente, doctor, descripcion, diagnostico } = data;

    if (!paciente || !doctor || !descripcion || !diagnostico) throw new Error('Hay campos que deben ser especificados');

    const nuevaHistoria = new Historia(data);
    await nuevaHistoria.save();
    return nuevaHistoria;
}