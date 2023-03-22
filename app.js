const express = require('express');
const app = express();
const path = require('path');
const logMiddleware = require('./middlewares/logMiddleware')
const authMiddleware = require('./middlewares/authMiddleware')
// const uploadFile = multer({storage})
// const mainController = require('./controllers/mainController');
const router = require('./routes/mainRouter');
const mainRouter = require ("./routes/mainRouter");
const nonUserRouter = require ('./routes/nonUserRouter')
const publicPath = path.resolve(__dirname, './public')
const methodOverride = require('method-override')
const session = require('express-session')
const users = require('./routes/users.js')

app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use(express.static("public"))
app.use(methodOverride('_method'))
app.use(session({
    secret: 'Ramon_Marino12!!!'
  }))

app.set('view engine', 'ejs');
app.set('views', './views');

// app.use(nonUserRouter)
app.use('/users', users)

app.use(logMiddleware);
app.use(authMiddleware);

app.use(mainRouter);

app.listen(3010, () => 
console.log('Servidor funcionando')
)
