const express = require('express');
const app = express();
const connection = require('./connection');
const usuarioRoutes = require('./routes/usuarios');

app.set('port', 3000);

app.use(express.urlencoded({extended: false}));

app.use(usuarioRoutes);

app.listen(app.get('port'), ()=>{
    console.log('App corriendo en el puerto: ' + app.get('port'))
});