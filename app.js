const express = require('express');
const app = express();
const path = require('path');
const mainController = require('./controllers/mainController');
const router = require('./routes/mainRouter');
const mainRouter = require ("./routes/mainRouter");
const publicPath = path.resolve(__dirname, './public')

app.use(express.static("public"))

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(mainRouter);

app.listen(3010, () => 
console.log('Servidor funcionando')
)
