const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu app");
})

app.get("/sobre", function(req, res){
    res.send("Minha pagina é sobre");
})

app.get("/soma/:num1/:num2", function(req, res){
    numberOne = parseInt(req.params.num1);
    numberTwo = parseInt(req.params.num2);
    soma = numberOne + numberTwo;
    res.send(soma);
})


app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
});