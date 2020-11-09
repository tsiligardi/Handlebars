const express=require('express')//inserisce la libreria di express
const app = express() //crea un server di express

const handlebars = require('express-handlebars')//carica il modulo di handelbars
app.set('view engine', 'hbs')//app.set('view engine', estensione_file)

const port = 8080 //porta su cui si avvia il server


app.use(express.static('public'))//serve per usare i files css contenuti nella cartella public
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index', //indica il layout di default
    partialsDir: __dirname + '/views/partials/'//indica da dove vado a prendere i partials da inserire
    }));
    app.get('/', (req, res) => {
    res.render('main',{layout:'index'}); //se ometto {layout: 'nomefile'} gli passo quello di default
    });
app.listen(port, () => console.log(`App listening to port ${port}`))