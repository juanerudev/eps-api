const mongoose = require('mongoose');

const historiaSchema = new mongoose.Schema({
    paciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente',
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    fecha: { type: Date, default: Date.now },
    descripcion: { type: String, required: true },
    diagnostico: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Historia', historiaSchema);
