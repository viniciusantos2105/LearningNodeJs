const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
var handle = handlebars.create({defaultLayout: 'main'});
const Sequelize = require('sequelize');

// Config
    // Template Engine
    app.engine('handlebars', handle.engine);
    app.set('view engine', 'handlebars');

    //Conexão com o banco de dados MySQL
    const sequelize = new Sequelize('test', 'root', '1234', {
        host: "localhost",
        dialect: 'mysql'
    });
   
//Rotas
    app.get('/cad', function(req, res){
         res.render('formulario')
    })


app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
});