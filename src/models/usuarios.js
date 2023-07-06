const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const usuarioShema = new Shema({
    nombre : String,
    email : String,
    password : String,
});
const Usuario = mongoose.model('Usuario', usuarioShema);

module.exports = Usuario;