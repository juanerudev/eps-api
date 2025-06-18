const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
    fecha: { type: Date, required: true },
    hora: { type: String, required: true },
    motivo: { type: String, required: true },
    estado: {
        type: String,
        enum: ['pendiente', 'realizada', 'cancelada'],
        default: 'pendiente'
    },
    paciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente',
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Cita', citaSchema);
