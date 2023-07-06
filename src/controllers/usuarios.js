const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const usuario = require('../models/usuarios');
const Usuario = require('../models/usuarios');

const getAdmin = (req, res) => {
    try {
      const usuarioData = jwt.verify(req.token, 'secret-key');
      res.json({
        mensaje: 'Datos correctos, ingreso',
        usuarioData: usuarioData,
      });
    } catch (err) {
      res.send('Ha ocurrido un error: ' + err);
    }
  };
  

const login = async (req, res) => {
    try {
      const result = await Usuario.findOne({ email: req.body.email });
      if (result) {
        const passwordMatch = await bcrypt.compare(req.body.password, result.password);
        if (passwordMatch) {
          jwt.sign({usuario: result}, 'secret-key', (err, token) =>{
            res.send({token : token})
          })
        } else {
          res.send('Contraseña Incorrecta');
        }
      } else {
        res.send('No existe Usuario');
      }
    } catch (err) {
      res.send('Ha ocurrido un error ' + err);
    }
  };
  
  

const registrar = (req, res) => {
    const usuario = new Usuario({
      nombre: req.body.nombre,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
    });
  
    usuario.save()
      .then((result) => {
        res.send('Registro correcto');
      })
      .catch((err) => {
        res.send('Ha ocurrido un error: ' + err);
      });
  };
  

module.exports = { getAdmin, login, registrar}
