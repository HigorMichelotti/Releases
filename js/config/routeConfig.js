angular.module("releases").config(['$locationProvider', function($locationProvider){ 
    $locationProvider.hashPrefix(''); 
}]); 

angular.module("releases").config(function($routeProvider){
    $routeProvider.when('/cadastrar', {
        templateUrl: 'view/cadastroDeVersao.html'
    })
});

angular.module("releases").config(function($routeProvider){
    $routeProvider.when('/listagem', {
        templateUrl: 'view/listagemDeVersao.html'
    })
});