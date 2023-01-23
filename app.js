const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer')
// const uploadFile = multer({storage})
// const mainController = require('./controllers/mainController');
const router = require('./routes/mainRouter');
const mainRouter = require ("./routes/mainRouter");
const publicPath = path.resolve(__dirname, './public')
const methodOverride = require('method-override')

app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use(express.static("public"))
app.use(methodOverride('_method'))
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(mainRouter);

app.listen(3010, () => 
console.log('Servidor funcionando')
)
