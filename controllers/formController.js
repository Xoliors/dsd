const formModel = require('../models/formModel');

exports.saveData = async (req, res) => {
    try {
        const { nombre, apellido_paterno, apellido_materno, telefono, direccion, codigo_postal, edad, descripcion } = req.body;

        console.log('Datos recibidos en el controlador:', req.body);

        await formModel.save({
            nombre,
            apellido_paterno,
            apellido_materno,
            telefono,
            direccion,
            codigo_postal,
            edad,
            descripcion,
        });

        res.redirect('/?success=true');
    } catch (error) {
        console.error('Error al guardar los datos:', error.message);
        res.status(500).send(`Error al guardar los datos: ${error.message}`);
    }
};
