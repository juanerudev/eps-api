require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const routerApi = require('./routes');

const app = express();
const PORT = process.env.PORT || 4000;
connectDB();

app.use(express.json());

routerApi(app);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});