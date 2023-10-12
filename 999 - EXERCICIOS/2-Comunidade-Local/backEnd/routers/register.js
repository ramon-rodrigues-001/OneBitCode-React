const user = require('../models/user.js')
const express = require('express')
const router = express.Router()


router.post("/api/register", async (req, res) => { 
    const { username, email, password } = req.body;
    let userExist = false

    await user.find().then(usuarios => {
        console.log(usuarios)

        usuarios.forEach(usuario => {
            if (username === usuario.nome) {
                userExist = true
                res.sendStatus(501)
            }
            else if (email === usuario.email) {
                userExist = true
                res.sendStatus(502)
            }
            else if (password === usuario.senha) {
                userExist = true
                res.sendStatus(503)
            }
        })

        if (userExist === false) {
            const newUser = new user({ 
                nome: username, 
                email: email, 
                senha: password 
            })
            try {
                newUser.save()
                res.sendStatus(200);
            }
            catch {
                console.log('===== Erro ao salvar usuario =====')
            }
        }
    })
});

module.exports = router