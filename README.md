# EPS API

API REST para la gestión de pacientes, doctores, citas médicas e historias clínicas. Construida con **Node.js**, **Express** y **MongoDB**, siguiendo buenas prácticas de arquitectura por capas.

---

## Tecnologías

- Node.js + Express
- MongoDB + Mongoose
- Dotenv (variables de entorno)
- Arquitectura por capas (Model, Service, Route)

---

## Instalación

```bash
git clone https://github.com/tuusuario/eps-api.git
cd eps-api
npm install
```

---

## Configuración
Crea un archivo .env en la raíz del proyecto con el siguiente
```bash
PORT=4000
MONGO_URI=mongodb://localhost:27017/epsdb
```
Ejecutar
```bash
npm run dev
```
---

## Endpoints
### Pacientes
**GET:** /api/pacientes

**GET:** /api/pacientes/:id

**POST:** /api/pacientes

**PUT:** /api/pacientes/:id

**DELETE:** /api/pacientes/:id

### Doctores
**GET:** /api/doctores

**GET:** /api/doctores/:id

**POST:** /api/doctores

**PUT:** /api/doctores/:id

**DELETE:** /api/doctores/:id

### Citas
**GET:** /api/citas

**GET:** /api/citas/:id

**POST:** /api/citas

**PUT:** /api/citas/:id

**DELETE:** /api/citas/:id

### Historias clinicas
**GET:** /api/historias

**GET:** /api/historias/paciente/:pacienteId

**POST:** /api/historias