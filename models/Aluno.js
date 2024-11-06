const mongoose = require('mongoose');
const Aluno = mongoose.model('Aluno', {
    ra: String,
    nome: String,
    disciplinas: Array

});
module.exports = Aluno;