const express = require('express');
const formController = require('../controllers/formController');
const router = express.Router();

// Ruta para mostrar el formulario
router.get('/', (req,res)=>{
    res.render('pages/form')
})

// Ruta para manejar el envío del formulario
router.post('/guardar', formController.saveData);

module.exports = router;
