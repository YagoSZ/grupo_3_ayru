const express = require('express');
const path = require('path')
const app = express();
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath) )

app.listen(3010, () => 
console.log('Servidor funcionando')
)

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './/views/home.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './/views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './/views/login.html'))
});

app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './/views/productDetail.html'))
});

app.get('/productCart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './/views/productCart.html'))
});

app.get('/iphone13', (req, res) => {
    res.sendFile(path.resolve(__dirname, './/views/iphone13.html'))
});

app.get('/s22ultra', (req, res) => {
    res.sendFile(path.resolve(__dirname, './/views/s22ultra.html'))
});

app.get('/s21fe', (req, res) => {
    res.sendFile(path.resolve(__dirname, './/views/s21fe.html'))
});