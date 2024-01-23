const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    email: String,
    senha: String,
    nome: String,
    sobrenome: String,
    sexo: String,
    dataNascimento: String
});

module.exports = model('User', UserSchema);
