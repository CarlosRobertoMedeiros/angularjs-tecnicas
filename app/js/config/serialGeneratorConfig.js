angular.module("listaTelefonica").config(function(serialGeneratorProvider){
    console.log(serialGeneratorProvider.setLength(5));//A partir de agora o serviço está configurável
});