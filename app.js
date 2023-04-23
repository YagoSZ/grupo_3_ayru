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
const cookieParser = require('cookie-parser');


const apiProductsRouter = require('./routes/api/products')
const apiUsersRouter = require('./routes/api/users')


app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))
app.use(methodOverride('_method'))
app.use(session({
    secret: 'Ramon_Marino12!!!',
    resave: false, 
    saveUninitialized: false,
  }))
  app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(nonUserRouter)
app.use(authMiddleware);
app.use(logMiddleware);
app.use(mainRouter);

// API
app.use('/api/products',apiProductsRouter);
app.use('/api/users', apiUsersRouter)

app.listen(3010, () => 
console.log('Servidor funcionando')
)
