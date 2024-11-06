const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

// Rota para obter todos os alunos
router.get('/', alunoController.obterTodos);

// Rota para obter um aluno pelo ra
router.get('/:ra', alunoController.obterPorRa);

// Listar todas as disciplinas de um aluno
router.get('/:ra/disciplinas', alunoController.obterDisciplinas);

//Rota para atualizar dados do aluno
router.put('/:ra', alunoController.atualizar);


module.exports = router;