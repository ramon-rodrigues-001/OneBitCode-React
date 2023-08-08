const mongoose = require('mongoose')

const Resposta = mongoose.model('Resposta', {
    texto: {type: String, require: true},
    perguntaId: {type: String, require: true}
})

module.exports = Resposta