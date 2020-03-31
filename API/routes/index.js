const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers')

module.exports = function(){
 
    // Agrega nuevos pacientes via POST
    router.post('/pacientes', pacienteController.nuevoCliente)
    
    router.get('/pacientes',pacienteController.obtenerPacientes)

    router.get('/pacientes/:id',pacienteController.traerPaciente)

    router.put('/pacientes/:id' ,pacienteController.actualizarPaciente)

    router.delete('/pacientes/:id' ,pacienteController.borrarPaciente)

    return router;
}