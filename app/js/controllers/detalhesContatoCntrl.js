angular.module("listaTelefonica").controller('detalhesContatoCntrl',function($scope,$routeParams,contato){
    $scope.contato = contato.data;
});
