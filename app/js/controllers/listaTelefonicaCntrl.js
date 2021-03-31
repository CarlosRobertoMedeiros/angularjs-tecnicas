angular.module("listaTelefonica").controller('listaTelefonicaCntrl',function($scope, contatos, contatosAPI, operadoras, serialGenerator,$location,$filter){

    $scope.app = $filter('upper')("Lista Telefônica");
    $scope.contatos = [];
    $scope.operadoras = operadoras.data;
    $scope.contatos = contatos.data;

    $scope.classe ="selecionado";
   
    var init = function(){
        calcularImpostos($scope.contatos);
        generateSerial($scope.contatos);
    };

    var calcularImpostos = function(contatos){
        contatos.forEach(function(contato){
            contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco);
        });
    };
    
    var generateSerial = function(contatos){
        contatos.forEach(function(item){
            item.serial = serialGenerator.generate();
        });
    };

    $scope.adicionarContato = function(contato){
        contato.serial =serialGenerator.generate();
        contato.data = new Date();
        contatosAPI.saveContato(contato).success(function(result,status){
            delete $scope.contato;
        });
    }
    
    $scope.apagarContatos = function(contatos){
        $scope.contatos = contatos.filter(function(contato){
            if (contato.selecionado) {
                contatosAPI.deleteContato(contato).success(function(result,status){
                    delete $scope.contato;
                    $location.path("/#");
                });     
            };
        });
    };

    $scope.verificarContatoSelecionado = function(contatos){
        $scope.hasContatoSelecionado =  contatos.some(function(contato){
            return contato.selecionado;
        });
    }

    $scope.ordernarPor = function(campo){
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    }

    var calcularImposto = function(preco){
        var imposto = 1.2;
        return preco * imposto;
    };

    $scope.reset = function(){
        $scope.contatos = angular.copy($scope.contatos);
    };


    init();
    
});