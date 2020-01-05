const Sucursales = require('../models/sucursales');

exports.getSucursales = async (req, res) =>{
    Sucursales.find((err, sucursales) =>{
        if(!err)
            res.status(200).json({ data: sucursales });
        else
            res.status(400).send({ message: `Erorr al intentar listar registros ${err}` });
    }) 
}