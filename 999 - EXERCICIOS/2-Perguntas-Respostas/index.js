// Imports //
const express = require('express');
const appExpress = express();
const bodyParser = require('body-parser')
const Pergunta = require('./models/Pergunta.js')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ramon:ramon123456789@cluster0.vmlmrz3.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require('mongoose')


// Configurando o body-parser //
appExpress.use(bodyParser.urlencoded({extended: false}))
appExpress.use(bodyParser.json()) 

// Dizendo para o express utilizar o "ejs" do view engine //
appExpress.set('view engine', 'ejs')

// Inserindo arquivos estaticos como CSS e JS no express //
appExpress.use(express.static('public'))




// CONFIGURANDO AS ROTAS
appExpress.get('/', (req, res) => {
    // res.render('index', {
    // })
    res.status(200).json({smg: "Bem-vindo a nossa API!!"})
    console.log(req.body)
});

appExpress.get('/perguntar', (req, res) => {
    res.render('perguntar')
})


appExpress.post('/salvarPergunta', async (req, res) => {
    const title = req.body.title;
    const descrition = req.body.descrition;

    if (!title) {
        return res.status(400).send('Título obrigatório');
    }

    if (!descrition) {
        return res.status(400).send('Descrição obrigatória');
    }

    const pergunta = new Pergunta({
        title,
        descrition
    });

    try {
        await pergunta.save();
        console.log('Pergunta salva!');
        return res.send(`<h1>Formulário recebido!</h1> 
        <h3>title = ${title} </br> description = ${descrition}</h3>`);
    } catch (erro) {
        console.log('Erro ao salvar a pergunta: ' + erro);
        return res.status(500).send('Erro ao salvar a pergunta');
    }
});





//CONECTANDO AO MONGO
// Crie um MongoClient com um objeto MongoClientOptions para definir a versão Stable da API
const client = new MongoClient(uri, {
    serverApi: {
       version: ServerApiVersion.v1,
       strict: true,
       deprecationErrors: true,
    }
});
async function run() {
    try {
        // Conecte o cliente ao servidor (opcional a partir da v4.7)
        await client.connect();

        // Envie um ping para confirmar uma conexão bem-sucedida
        await client.db("admin").command({ ping: 1 });
        console.log("conectado ao banco de dados");
        appExpress.listen('4000', () => {
            console.log('Servidor rodando...');
        });
    } 
    finally {
        // Garante que o cliente será fechado quando você terminar/errar
        await client.close();
    }
}
run().catch(console.dir);
