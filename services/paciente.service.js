const Paciente = require('../models/paciente.model');

exports.find = async () => {
    return await Paciente.find();
}

exports.findOne = async (id) => {
    const paciente = await Paciente.findById(id);
    if (!paciente) throw new Error('El paciente no se encontró');
    return paciente;
}

exports.create = async (data) => {
    const { nombre, documento, fechaNacimiento } = data;

    if (!nombre || !documento || !fechaNacimiento) throw new Error('Hay campos que deben ser especificados');

    const nuevoPaciente = new Paciente(data);
    await nuevoPaciente.save();
    return nuevoPaciente;
}

exports.update = async (id, data) => {
    const paciente = await Paciente.findByIdAndUpdate(id, data, { new: true });
    if (!paciente) throw new Error('El paciente no se encontró');
    return paciente;
}

exports.delete = async (id) => {
    const paciente = await Paciente.findByIdAndDelete(id);
    if (!paciente) throw new Error('El paciente no se encontró');
    return { message: 'Paciente eliminado correctamente' };
}