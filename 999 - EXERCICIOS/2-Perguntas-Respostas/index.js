const express = require('express');
const appExpress = express();


// Dizendo para o express utilizar o "ejs" do view engine
appExpress.set('view engine', 'ejs')

appExpress.get('/', (req, res) => {
    const nome = "Ramon"

    res.render('index', {
        nome: nome,
        curso: "Funçoes Node.js"
    })
});


appExpress.get('/perfil', (req, res) => {
    res.render('principal/perfil', {
        Usuario: "Ramon",
        idade: 19,
        proficion: "Desenvolvedor Web",
        empregado: false
    })
});


appExpress.listen('4000', () => {
    console.log('Servidor rodando...');
});