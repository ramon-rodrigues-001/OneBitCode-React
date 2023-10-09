const express = require('express')
const bodyParser = require('body-parser');

const app = express()

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/login", (req, res) => {
    const { username, email, password } = req.body;
    console.log(`${username} www`)
    res.sendStatus(200); // Credenciais corretas
    
    // if (username !== "" && password !== "") {
    // } else {
    //   res.status(401).send("Credenciais inválidas"); // Credenciais incorretas
    // }
});  

app.listen(4000, ()=> {
    console.log('certo')
})