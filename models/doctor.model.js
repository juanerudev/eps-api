const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  especialidad: { type: String, required: true },
  registroMedico: { type: String, required: true, unique: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Doctor', doctorSchema);
