angular.module("listaTelefonica").controller('listaTelefonicaCntrlMock',function($scope, uppercaseFilter, $http){

    $scope.app = "Lista Telefônica";
    $scope.contatos = [];
    $scope.contatos = [
        {nome: uppercaseFilter("Pedro"), telefone: "99998888", data: new Date() , cor: "blue"},
        {nome:"Ana"  , telefone: "99997777", data: new Date() ,cor: "yellow"},
        {nome:"Maria", telefone: "99996666", data: new Date() ,cor: "red"}
    ];
    
    $scope.operadoras = [
        {nome:"Oi",   codigo: 14, categoria:"Celular" , preco: 2},
        {nome:"Vivo", codigo: 15, categoria:"Celular", preco: 1},
        {nome:"Tim",  codigo: 41, categoria:"Celular", preco: 3},
        {nome:"GVT",  codigo: 25, categoria:"Fixo", preco: 1},
        {nome:"Embratel", codigo: 21, categoria:"Fixo", preco: 2}
    ];

    var carregarContatos = function(){
        return $scope.contatos;
    };

    var carregarOperadoras = function(){
        return $scope.operadoras;
    };
   
    $scope.adicionarContato = function(contato){
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };

    $scope.classe ="selecionado";
    
    $scope.apagarContatos = function(contatos){
        $scope.contatos = contatos.filter(function(contato){
            if (!contato.selecionado) return contato;
        });
    };

    $scope.isContatoSelecionado = function(contatos){
        return contatos.some(function(contato){
            return contato.selecionado;
        });
    }

    $scope.ordernarPor = function(campo){
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    }
    carregarContatos();
    carregarOperadoras();

});
