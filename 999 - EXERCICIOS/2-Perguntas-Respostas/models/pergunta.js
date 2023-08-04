const mongoose = require('mongoose')

const perguntaSchema = mongoose.Schema({
    title: {type: String, required: true},
    descrition: {type: String, require: true}
})

module.exports = mongoose.model("Perguntas", perguntaSchema)