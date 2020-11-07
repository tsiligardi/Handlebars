const express=require('express')//inserisce la libreria di express
const app = express() //crea un server di express

const handlebars = require('express-handlebars')//carica il modulo di handelbars
app.set('view engine', 'handlebars')//abilita il nostro programma ad usare Handlebars 

const port = 8080 //porta su cui si avvia il server

app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    })) //Recupera l'HTML statico da views (index.handelbars) e il body con quelllo che gli passo nel res.render

app.use(express.static('public'))//serve per usare i files css contenuti nella cartella public
app.get('/', (req, res) => res.render('main',{layout:'index'})) 
//res.render(cosa_ci_metto_dentro, {layout: cosa_riempio})
app.listen(port, () => console.log(`App listening to port ${port}`))