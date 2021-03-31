//Modo Convencional
var pessoa1 = {
    nome:"Pedro",
    idade:20
};

console.log(pessoa1);

//Modo Fábrica
//Usando a Função Fábrica
var criarPessoa = function(nome,idade){
    return {
        nome :nome,
        idade: idade
    }
};

var maria = criarPessoa('Maria',22);
console.log(maria);