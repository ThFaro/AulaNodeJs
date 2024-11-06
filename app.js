const express = require('express');
const usuarioRouter = require('./routes/usuario');
const lista1Router = require('./routes/lista1');
const alunoRouter = require('./routes/aluno')
const professorRouter = require('./routes/professor')
const mongoose = require('mongoose')

const app = express();
app.use(express.json());
app.use('/usuario', usuarioRouter);
app.use('/lista1', lista1Router);
app.use('/aluno', alunoRouter);
app.use('/professor', professorRouter);

mongoose.connect('mongodb+srv://thfaroads:vl7jrAcL5cBv0my8@mongoinicial.w24va.mongodb.net/?retryWrites=true&w=majority&appName=MongoInicial')
    .then(() => {
        app.listen(3000, () => {
            console.log('DEU BOA!!');
        })
    })
    .catch((err) => {
        console.log(err);
    });
