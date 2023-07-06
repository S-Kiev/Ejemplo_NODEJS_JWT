const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://127.0.0.1:27017/jwtdb')
  .then((db) => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((err) => {
    console.log('Ha ocurrido un error al conectarse a MongoDB: ' + err);
  });

module.exports = connection;

