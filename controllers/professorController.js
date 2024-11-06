const professorModel = require('../models/Professor');

// Lógica para obter todos os professores
exports.obterTodos = async (req, res) => {
    try {
        const professores = await professorModel.find();
        res.status(200).json(professores);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// Lógica para obter um professor específico
exports.obterUm = async (req, res) => {
    try {
        const id = req.params.id;
        const professor = await professorModel.findOne({ id: req.params.id });
        if (!professor) {
            res.status(404).json({ message: 'Professor não encontrado' });
        } else {
            res.status(200).json(professor);
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// Lógica para obter todas as turmas de um professor
exports.obterTurmas = async (req, res) => {
    try {
        const id = req.params.id;
        const professor = await professorModel.findOne({ id: req.params.id });
        if (!professor) {
            return res.status(404).json({ message: "Professor não encontrado" });
        }
        res.status(200).json(professor.turmas);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// Lógica para atualizar dados de um professor
exports.atualizar = async (req, res) => {
    try {
        const id = req.params.id;
        const professor = await professorModel.findOne({ id: req.params.id });
        if (!professor) {
            return res.status(404).json({ message: "Professor não encontrado" });
        }
        professor.nome = req.body.nome;
        professor.idade = req.body.idade;
        professor.departamento = req.body.departamento;

        await professor.save();
        res.status(200).json(professor);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// Lógica para adicionar uma turma para um professor
exports.adicionarTurma = async (req, res) => {
    try {
        const id = req.params.id;
        const turmaId = req.body.turma;

        const professor = await professorModel.findOneAndUpdate(
            { id: req.params.id },
            { $addToSet: { turmas: turmaId } },
            { new: true }
        );

        if (!professor) {
            res.status(404).json({ message: 'Professor não encontrado' });
        } else {
            res.status(200).json(professor);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// Lógica para listar professor por departamento
exports.listarPorDepartamento = async (req, res) => {
    try {
        const departamento = req.params.departamento;
        const professores = await professorModel.find({ departamento });
        if (!professores) {
            res.status(404).json({ message: 'Nenhum professor encontrado' });
        } else {
            res.status(200).json(professores);
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// Lógica para remover um professor
exports.removerProfessor = async (req, res) => {
    try {
        const id = req.params.id;
        const professor = await professorModel.findOneAndDelete({ id: req.params.id });
        if (!professor) {
            res.status(404).json({ message: 'Id inválido' });
        } else {
            res.status(200).json({ message: 'Professor removido com sucesso' });
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
}


