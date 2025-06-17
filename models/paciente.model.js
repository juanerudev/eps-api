const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true, trim: true },
    documento: { type: String, required: true, unique: true },
    fechaNacimiento: { type: Date, required: true },
    direccion: { type: String },
    telefono: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Paciente', pacienteSchema);