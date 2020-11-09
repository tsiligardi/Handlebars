const express=require('express')//inserisce la libreria di express
const app = express() //crea un server di express

const handlebars = require('express-handlebars')//carica il modulo di handelbars
app.set('view engine', 'hbs')//app.set('view engine', estensione_file)

const port = 8080 //porta su cui si avvia il server

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    })) //esxtname: in questo modo posso indicare l'estensione dei file a cui mi riferisco con handelbars
app.use(express.static('public'))//serve per usare i files css contenuti nella cartella public
app.get('/', (req, res) => res.render('main',{layout:'index'})) 
//res.render(cosa_ci_metto_dentro, {layout: cosa_riempio})
app.listen(port, () => console.log(`App listening to port ${port}`))