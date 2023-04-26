const mongoose = require("mongoose")

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/aprendendo?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.1", {   
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Conectado...")
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB: "+ err)
})

//mongodb://127.0.0.1:27017/aprendendo?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.1