const express = require('express')
const cors = require("cors");

// Configurando o express
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());


app.post("/api/login", (req, res) => { 
    const { username, email, password } = req.body;
    console.log("Dados recebidos: ", req.body);


    res.sendStatus(200); // Credenciais corretas
});  

app.listen(4000, ()=> {
    console.log('certo')
})