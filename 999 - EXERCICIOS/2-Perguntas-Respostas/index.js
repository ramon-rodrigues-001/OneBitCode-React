const express = require('express');
const appExpress = express();


// Dizendo para o express utilizar o "ejs" do view engine
appExpress.set('view engine', 'ejs')

appExpress.get('/:nome?', (req, res) => {
    
    const nome = req.params.nome
    const produtos = [
        {nome: 'TV', preco: 3000},
        {nome: 'Notebook', preco: 2300},
        {nome: 'tablet', preco: 1200},
        {nome: 'sofa', preco: 2700}
    ]

    res.render('index', {
        nome: nome,
        idade: 19,
        curso: "Funçoes Node.js",
        produtos: produtos
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