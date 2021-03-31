angular.module("listaTelefonica").config(function($routeProvider){

    $routeProvider.when("/",{
        templateUrl:"view/contatos.html",
        controller: "listaTelefonicaCntrl",
        resolve:{
            contatos : function (contatosAPI){
                return contatosAPI.getContatos();    
            },
            operadoras : function (operadorasAPI){
                return operadorasAPI.getOperadoras();    
            }
        }
    });
    
    $routeProvider.when("/novoContato",{
        templateUrl:"view/novoContato.html",
        controller: "novoContatoCntrl",
        resolve:{
            operadoras : function (operadorasAPI){
                return operadorasAPI.getOperadoras();    
            }
        }
    });
    
    $routeProvider.when("/detalhesContato/:id",{
        templateUrl:"view/detalhesContato.html",
        controller: "detalhesContatoCntrl",
        resolve:{
            contato : function (contatosAPI, $route){
                return contatosAPI.getContato($route.current.params.id);    
            }
        }
    });

    $routeProvider.when("/error",{
        templateUrl:"view/error.html"
    });
    
    $routeProvider.otherwise({redirectTo:'/'});
});