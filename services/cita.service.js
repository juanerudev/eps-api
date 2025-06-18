const Cita = require('../models/cita.model');

exports.find = async () => {
    return await Cita.find().populate('paciente').populate('doctor');
}

exports.findOne = async (id) => {
    const cita = await Cita.findById(id).populate('paciente').populate('doctor');
    if (!cita) throw new Error('La cita no se encontró');
    return cita;
}

exports.create = async (data) => {
    const { fecha, hora, motivo, paciente, doctor } = data;

    if (!fecha || !hora || !motivo || !paciente || !doctor) throw new Error('Hay campos que deben ser especificados');

    const nuevaCita = new Cita(data);
    await nuevaCita.save();
    return nuevaCita;
}

exports.update = async (id, data) => {
    const cita = await Cita.findByIdAndUpdate(id, data, { new: true });
    if (!cita) throw new Error('La cita no se encontró');
    return cita;
}

exports.delete = async (id) => {
    const cita = await Cita.findByIdAndDelete(id);
    if (!cita) throw new Error('La cita no se encontró');
    return { message: 'Cita eliminada correctamente' };
}