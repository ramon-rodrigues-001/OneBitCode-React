// Configurando o express
const express = require('express');
const appExpress = express();


// Configurando o body-parser
const bodyParser = require('body-parser')
appExpress.use(bodyParser.urlencoded({extended: false}))
// Opisional para trabalhar com json
appExpress.use(bodyParser.json()) 


// Dizendo para o express utilizar o "ejs" do view engine
appExpress.set('view engine', 'ejs')
// Inserindo arquivos estaticos como CSS e JS no express
appExpress.use(express.static('public'))


const perguntaSchema = require('./models/pergunta.js')



appExpress.get('/', (req, res) => {
    res.render('index', {
    })
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