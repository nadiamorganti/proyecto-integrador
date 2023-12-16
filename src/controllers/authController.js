const path = require('path');

module.exports = {
    login: (req, res) => res.render(path.resolve(__dirname, '../views/auth/login.ejs')),
    doLogin: (req,res) => res.send('Esta es la ruta que valida los datos del LOGIN '),
    register: (req, res) => res.render(path.resolve(__dirname, '../views/auth/register.ejs')),
    doRegister: (req,res) => res.send('Esta es la ruta que CREA un NUEVO USUARIO'),
    logout: (res, req) => res.send('Esta desloguea o cierra la sesion del usuario')
}