// Imports //
const express = require('express');
const bodyParser = require('body-parser')
const perguntaSchema = require('./models/pergunta.js')

const appExpress = express();


// Configurando o body-parser //
appExpress.use(bodyParser.urlencoded({extended: false}))
appExpress.use(bodyParser.json()) 

// Dizendo para o express utilizar o "ejs" do view engine //
appExpress.set('view engine', 'ejs')

// Inserindo arquivos estaticos como CSS e JS no express //
appExpress.use(express.static('public'))


appExpress.get('/', (req, res) => {
    // res.render('index', {
    // })
    res.status(200).json({smg: "Bem-vindo a nossa API!!"})
    console.log(req.body)
});

appExpress.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

appExpress.post('/salvarPergunta', (req, res) => {
    const title = req.body.title
    const descrition = req.body.descrition

    res.send(`<h1>Formulario recebido!</h1> 
    <h3>title = ${title} </br> desctrition = ${descrition}</h3>`)
})

appExpress.listen('4000', () => {
    console.log('Servidor rodando...');
});