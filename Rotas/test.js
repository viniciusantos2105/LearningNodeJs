const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '1234', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!!!");
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro);
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "titulo",
    conteudo: "conteudo dsadasdada"
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

Usuario.create({
    nome: "Vini",
    sobrenome: "Santos",
    idade: 10,
    email: "email@email.com"
})

//Usuario.sync({force: true}) = comando para criar tables