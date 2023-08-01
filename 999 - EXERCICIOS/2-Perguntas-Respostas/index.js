const express = require('express');
const appExpress = express();

// Dizendo para o express utilizar o "ejs" do view engine
appExpress.set('view engine', 'ejs')

// Inserindo arquivos estaticos como CSS e JS no express
appExpress.use(express.static('public'))


appExpress.get('/', (req, res) => {
    res.render('index', {
    })
});

appExpress.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

appExpress.listen('4000', () => {
    console.log('Servidor rodando...');
});