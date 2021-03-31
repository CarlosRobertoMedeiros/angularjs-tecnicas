angular.module("listaTelefonica").controller('novoContatoCntrl',function($scope, contatosAPI, serialGenerator, $location, operadoras){

    $scope.operadoras = operadoras.data;
    
    $scope.adicionarContato = function(contato){
        contato.serial =serialGenerator.generate();
        contato.data = new Date();
        contatosAPI.saveContato(contato).success(function(result,status){
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/");
        });
    }

});
