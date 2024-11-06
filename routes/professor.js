const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

// Rota para obter todos os professores
router.get('/', professorController.obterTodos);

// Rota para obter um professor específico
router.get('/:id', professorController.obterUm);

// Listar todas as turmas de um professor
router.get('/:id/turmas', professorController.obterTurmas);

// Rota para atualizar dados do professor
router.put('/:id', professorController.atualizar);

// Rota para adicionar uma turma para um professor
router.post('/:id/turmas', professorController.adicionarTurma);

// Rota para listar professor por departamento
router.get('/departamento/:id', professorController.listarPorDepartamento);

// Rota para remover um professor
router.delete('/:id', professorController.removerProfessor);


module.exports = router;