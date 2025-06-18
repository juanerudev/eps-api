const Doctor = require('../models/doctor.model');

exports.find = async () => {
    return await Doctor.find();
}

exports.findOne = async (id) => {
    const doctor = await Doctor.findById(id);
    if (!doctor) throw new Error('El doctor no se encontró');
    return doctor;
}

exports.create = async (data) => {
    const { nombre, especialidad, registroMedico } = data;

    if (!nombre || !especialidad || !registroMedico) throw new Error('Hay campos que deben ser especificados');

    const nuevoDoctor = new Doctor(data);
    await nuevoDoctor.save();
    return nuevoDoctor;
}

exports.update = async (id, data) => {
    const doctor = await Doctor.findByIdAndUpdate(id, data, { new: true });
    if (!doctor) throw new Error('El doctor no se encontró');
    return doctor;
}

exports.delete = async (id) => {
    const doctor = await Doctor.findByIdAndDelete(id);
    if (!doctor) throw new Error('El doctor no se encontró');
    return { message: 'Doctor eliminado correctamente' };
}