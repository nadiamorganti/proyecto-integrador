module.exports = {
    home: (req, res) => {
        res.render('index');
    },
    contact: (req, res) => res.send ('Esta es la vista de CONTACTO'),
    about: (req, res) => res.send ('Esta es la vista SOBRE NOSOTROS'),
    faqs: (req, res) => res.send('Esta es la vista de preguntas Frecuentes')

}