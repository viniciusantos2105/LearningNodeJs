const mongoose = require("mongoose")

//Configurando o mongoose 
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/aprendendo?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.1", {   
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Conectado...")
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB: "+ err)
})

//Definindo Model
const UserSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
})

//Collection
mongoose.model('usuarios', UserSchema)

//Registrando usuario no banco
const newUser = mongoose.model('usuarios')

    new newUser({
        nome: "Vinícius",
        sobrenome: "Jesus",
        email: "vini@email.com",
        idade: 21,
        pais: "Brasil"
    }).save().then(() => {
        console.log("Usuário criado com sucesso!")
    }).catch((err) => {
        console.log("Ocorreu um erro ao registrar o usuario no banco!!")
    })