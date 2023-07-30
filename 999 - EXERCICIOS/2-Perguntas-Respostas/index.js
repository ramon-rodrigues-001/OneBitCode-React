const express = require('express');
const appExpress = express();


// Dizendo para o express utilizar o "ejs" do view engine
appExpress.set('view engine', 'ejs')

appExpress.get('/:nome?', (req, res) => {
    const nome = req.params.nome

    res.render('index', {
        nome: nome,
        curso: "Funçoes Node.js"
    })
});


appExpress.get('/perfil', (req, res) => {
    res.render('principal/perfil', {
        usuario: "Ramon",
        idade: 19,
        proficion: "Desenvolvedor Web",
        empregado: false
    })
});


appExpress.listen('4000', () => {
    console.log('Servidor rodando...');
});