angular.module('listaTelefonica').factory("timestampInterceptor", function(){

    return{
        request:function(config){
            var url = config.url;
            if (url.indexOf('view') > -1) return config;
            var timestampDate = new Date().getTime();
            config.url = url + "?timestamp="+ timestampDate;
            console.log(url);
            return config;
        } 
    };
});