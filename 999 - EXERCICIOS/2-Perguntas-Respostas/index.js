const express = require('express');
const appExpress = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Pergunta = require('./models/Pergunta.js');
const Resposta = require('./models/Resposta.js');

// Configurando o body-parser //
appExpress.use(bodyParser.urlencoded({ extended: false }));
appExpress.use(bodyParser.json());

// Dizendo para o express utilizar o "ejs" do view engine //
appExpress.set('view engine', 'ejs');

// Inserindo arquivos estaticos como CSS e JS no express //
appExpress.use(express.static('public'));



// CONFIGURANDO AS ROTAS
appExpress.get('/', (req, res) => {

    Pergunta.find().sort({ _id: -1 })
    .then(perguntas => {
        res.render('index', {
            perguntas: perguntas
        })
    })
    .catch(erro => {
        console.log('Erro ao buscar perguntas: ' + erro);
    });
});

appExpress.get('/fazerPergunta', (req, res) => {
    res.render('fazerPergunta');
});

appExpress.post('/salvarPergunta', async (req, res) => {
    const title = req.body.title;
    const descrition = req.body.descrition;

    const criarPergunta = await Pergunta.create({
        title,
        descrition
    }).then(()=> {
        console.log('Pergunta salva!');
        res.redirect('/')
    }).catch((smgErro) => {
        console.log('Erro ao salvar a pergunta: ' + smgErro);
        return res.status(500).send('Erro ao salvar a pergunta');
    })
});


appExpress.get('/fazerPergunta/:id', (req, res) => {
    const id = req.params.id
    Pergunta.findOne({_id: id}).then(pergunta => {
        if (pergunta != undefined) {
            res.render('pergunta', {
                pergunta: pergunta
            })
        }
    })
})


appExpress.post('/resposta', (req, res) => {
    const texto = req.body.resposta
    const idPergunta = req.body.inputIDPergunta
    const idPerguntaLimpo = idPergunta.replace(/`/g, '')

    Resposta.create({
        texto: texto,
        perguntaId: idPergunta
    }).then(() => {
        res.redirect(`/fazerPergunta/` + idPerguntaLimpo)
        console.log(`/fazerPergunta/` + idPerguntaLimpo)
    })  
})


//CONECTANDO AO MONGO
mongoose.connect("mongodb+srv://ramon:ramon123456789@cluster0.vmlmrz3.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Conectado ao banco de dados");
    appExpress.listen('4000', () => {
        console.log('Servidor rodando...');
    });
}).catch(err => {
    console.log('Erro ao conectar ao banco de dados: ' + err);
});

