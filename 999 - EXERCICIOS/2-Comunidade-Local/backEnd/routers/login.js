const { default: mongoose } = require('mongoose');
const user = require('../models/user.js')
const express = require('express')
const router = express.Router()


router.post("/api/login", (req, res) => { 
    const { username, email, password } = req.body;
    console.log("Dados recebidos: ", req.body);

    const newUser = new user({ 
        nome: username, 
        email: email, 
        senha: password 
    })

    try {
        newUser.save()
        res.sendStatus(200); // Credenciais corretas
    }
    catch {
        console.log('===== Erro ao salvar usuario =====')
    }
});

module.exports = router