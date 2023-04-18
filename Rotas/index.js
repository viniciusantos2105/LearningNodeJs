const express = require("express");
const app = express();

app.get("/", function(req, res){
   res.sendFile(__dirname + "/html/index.html");
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
})

app.get("/soma/:num1/:num2", function(req, res){
    res.send(req.params.num1 + req.params.num2);
})


app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
});