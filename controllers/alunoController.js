// Importar modelo de usuário (simulando um banco de dados, etc.)
const alunoModel = require('../models/Aluno');

// Lógica para obter todos os alunos
exports.obterTodos = async (req, res) => {
    try {
        const alunos = await alunoModel.find();
        res.status(200).json(alunos);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

//Logica para obter aluno pelo ra
exports.obterPorRa = async (req, res) => {
    try {
        const ra = req.params.ra;
        const aluno = await alunoModel.findOne({ ra: req.params.ra });
        if (!aluno) {
            return res.status(404).json({ message: "Aluno não encontrado" });
        }
        res.status(200).json(aluno);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
// Logica para obter todas as disciplinas de um aluno
exports.obterDisciplinas = async (req, res) => {
    try {
        const ra = req.params.ra;
        const aluno = await alunoModel.findOne({ ra: req.params.ra });
        if (!aluno) {
            return res.status(404).json({ message: "Aluno não encontrado" });
        }
        res.status(200).json(aluno.disciplinas);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// Logica para atualizar os dados de um aluno
exports.atualizar = async (req, res) => {
    try {
        const ra = req.params.ra;
        const aluno = await alunoModel.findOne({ ra: req.params.ra });
        if (!aluno) {
            return res.status(404).json({ message: "Aluno não encontrado" });
        }
        aluno.nome = req.body.nome;
        aluno.ra = req.body.ra;

        await aluno.save();
        res.status(200).json(aluno);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};






