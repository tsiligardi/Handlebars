const express=require('express')//inserisce la libreria di express
const app = express() //crea un server di expree
const port = 8080 //porta su cui si avvia il server
app.use(express.static('public'))//serve per usare i files css contenuti nella cartella public
app.get('/', (req, res) => res.send('Hello World !'))
app.listen(port, () => console.log(`App listening to port ${port}`))