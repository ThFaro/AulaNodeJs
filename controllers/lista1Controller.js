//ex1 
exports.ex1 = (req, res) => {
    const texto = "beterraba";

    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let contador = 0;

    for (let char of texto) {
        if (vogais.includes(char)) {
            contador++;
        }
    }

    return res.json({ texto, totalVogais: contador });
};

//ex2 ex2?taxa&capital&tempo
exports.ex2 = (req, res) => {

    const capital = 1000; 
    const taxa = 0.05; 
    const tempo = 12;     

    const montante = capital * Math.pow(1 + taxa, tempo);

    return res.json({ montante: montante.toFixed(2) });
};

//ex3
exports.ex3 = (req, res) => {



    res.json({mensagem: 'ex3'});
};

//ex4
exports.ex4 = (req, res) => {

    const ano = 2025;


    res.json({mensagem: 'ex4'});
};

//ex5
exports.ex5 = (req, res) => {

    res.json({mensagem: 'ex5'});
};

//ex6
exports.ex6 = (req, res) => {

    res.json({mensagem: 'ex6'});
};
