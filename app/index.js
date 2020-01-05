const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config');

//mongoDB connect
mongoose.connect(config.MONGO_URI_ATLAS, { useNewUrlParser: true, useUnifiedTopology: true }, (err) =>{
    if(!err)
        console.log("conectado!!")
    else
        console.log("Error mongo connect " + err );
});

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Router
app.use('/api/v1/', require('./routes/cars.routes'));
app.use('/api/v1/', require('./routes/sucursales.routes'));

//Port run
app.listen(config.PORT, () =>{
    console.log(`Api-Crud running: ${config.PORT}` )
})