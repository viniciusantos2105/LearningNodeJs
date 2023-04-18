const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu app")
})

app.get("/sobre", function(req, res){
    res.send("Minha pagina é sobre")
})


app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081")
});