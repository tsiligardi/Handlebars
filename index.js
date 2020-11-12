const express=require('express')//inserisce la libreria di express
const app = express() //crea un server di express
const prova=-7
const handlebars = require('express-handlebars')//carica il modulo di handelbars
app.set('view engine', 'hbs')//app.set('view engine', estensione_file)
fakeApi = () => {
    return [
      {
        name: 'Katarina',
        lane: 'midlaner'
      },
      {
        name: 'Jayce',
        lane: 'toplaner'
      },
      {
        name: 'Heimerdinger',
        lane: 'toplaner'
      },
      {
        name: 'Zed',
        lane: 'midlaner'
      },
      {
        name: 'Azir',
        lane: 'midlaner'
      }
    ].filter((warrior)=>warrior.lane=='toplaner');

  }
const port = 8080 //porta su cui si avvia il server


app.use(express.static('public'))//serve per usare i files css contenuti nella cartella public
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index', //indica il layout di default
    partialsDir: __dirname + '/views/partials/',//indica da dove vado a prendere i partials da inserire
    }));
    app.get('/', (req, res) => {
    res.render('main',{layout: 'index', suggestedChamps: fakeApi(), listExists: true}); //se ometto {layout: 'nomefile'} gli passo quello di default
    });
app.listen(port, () => console.log(`App listening to port ${port}`))