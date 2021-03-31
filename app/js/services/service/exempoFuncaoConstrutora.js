//Função Construtora
var Pessoa = function(nome,idade){
    this.nome = nome;
    this.idade = idade;
};

var carlos = {};
Pessoa.call(carlos,"Carlos",25);
console.log(carlos);



