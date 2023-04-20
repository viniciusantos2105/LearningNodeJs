const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
var handle = handlebars.create({defaultLayout: 'main'});
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');

// Config
    // Template Engine
    app.engine('handlebars', handle.engine);
    app.set('view engine', 'handlebars');
    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    //Conexão com o banco de dados MySQL
    const sequelize = new Sequelize('test', 'root', '1234', {
        host: "localhost",
        dialect: 'mysql'
    });
   
//Rotas
    app.get('/cad', function(req, res){
         res.render('formulario');
    })

    app.post('/add', function(req, res){
        req.body.conteudo
        res.send("Texto: "+ req.body.titulo +  "\r\nConteudo: " + req.body.conteudo);
    })

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
});