const Cars = require('../models/cars');

exports.listCars = async (req, res) =>{
    await Cars.find((err, cars) =>{
        if(!err)
            res.status(200).json({ data: cars });
        else
            res.status(400).send({ message: `Erorr al intentar listar registros: ${err}` });
    })
}

exports.saveCars = async (req, res) =>{
    let newCars = new Cars ({
        mark: req.body.mark,
        model: req.body.model,
        age: req.body.age,
        price: req.body.price,
        transmision: req.body.transmision
    })

    await newCars.save((err) =>{
        if(!err)
            res.status(200).send({ message: `Registros agregados correctamente` });
        else
            res.status(400).send({ message: `Erorr al intentar agregar registros: ${err}` });
    })
}

exports.removeCars = async (req, res) =>{
    await Cars.findById({ _id: req.params._id }, (err, cars) =>{
        if(cars){
            cars.remove((err) =>{
                if(!err)
                    res.status(200).send({ message: `Registro eliminado correctamente` });
                else
                    res.status(400).send({ message: `Error al intentar eliminar registro: ${err}` });
            })
        }else
            res.status(404).send({ message: `Error al intentar eliminar registro, registro no existe: ${err}`});
    })
}

exports.editCars = async (req, res) =>{
    await Cars.findById({ _id: req.params._id }, (err, cars) =>{
        if(err)
            res.status(400).send({ message: `Error: ${err}` });
        if(cars){
            let carsToEdit = {
                mark: req.body.mark,
                model: req.body.model,
                age: req.body.age,
                price: req.body.price,
                transmision: req.body.transmision
            }
        
            Cars.findByIdAndUpdate({ _id: req.params._id}, { $set: carsToEdit}, (err) =>{
                if(!err)
                    res.status(200).send({ message: `Registro editado correctamente` });
                else
                    res.status(400).send({ message: `Error al intentar editar registro: ${err}` });
            })
        }else
            res.status(404).send({ message: `Error, registro no existe para editar: ${err}` });
    })
}