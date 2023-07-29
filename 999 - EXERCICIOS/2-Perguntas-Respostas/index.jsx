const express = require('express');
const App = require('./src/app.jsx')
const app = express();
console.log(App)

app.get('/', (req, res) => {
    res.send(App)
})

app.listen('4000', () => {
    console.log('Servidor rodando...')
})