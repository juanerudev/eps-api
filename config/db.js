const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conectado con MongoDB');
    } catch (err) {
        console.log('Falló la conexión con MongoDB: ', err);
        process.exit(1);
    }
}

module.exports = connectDB;