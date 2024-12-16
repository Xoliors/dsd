const mysql = require('mysql2/promise');
require('dotenv').config();

// Configurar el pool de conexiones
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10, // Número máximo de conexiones simultáneas
    queueLimit: 0, // Sin límite de solicitudes en cola
});

// Función para realizar consultas
exports.save = async (data) => {
    try {
        const sql = `
            INSERT INTO datos (nombre, apellido_paterno, apellido_materno, telefono, direccion, codigo_postal, edad, descripcion)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [data.nombre, data.apellido_paterno, data.apellido_materno, data.telefono, data.direccion, data.codigo_postal, data.edad, data.descripcion];

        const [result] = await pool.execute(sql, values);
        return result;
    } catch (error) {
        console.error('Error en la consulta:', error.message);
        throw error;
    }
};