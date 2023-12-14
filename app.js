const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const PORT = 4000;

app.use(express.static('public'));

/* VIEW ENGINE */

app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

app.use('/', mainRoutes);
app.use('/', shopRoutes);
app.use('/', adminRoutes);
app.use('/', authRoutes);

//MIDDLEWARE

app.use((req, res) => {
    res.status(404).send('Lo sentimos, página no encontrada!');
})

app.listen(4000, () => console.log("Servidor corriendo en http://localhost:4000"));