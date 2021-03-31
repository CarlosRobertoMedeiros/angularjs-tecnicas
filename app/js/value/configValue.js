//pode-se usar 
//    .constant a diferença é que aqui serviços do tipo provider podem ser injetados nos serviços do tipo provider
//    .value   não pode ser injetado por serviços do tipo provider
angular.module('listaTelefonica').constant("config",{
    baseUrl: "http://localhost:3000"
});