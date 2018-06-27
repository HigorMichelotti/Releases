angular.module("releases").controller("releasesCtrl", function($scope, $http){


    // $scope.$watch("filesDependencias" + count, function (data) {
    //     if(data){
    //         $scope.fileDependencia + count;
    //         $scope.fileDependencia = data;
    //         console.log($scope.fileDependencia);  
    //     }  
    // });

    var count = 1;
    $scope.addFile =  function(){
        $http({
            method : "GET",
            url : "view/campoDinamico.html"
        }).then(function mySuccess(response) {
            $scope.campoDinamico = response.data;
            var div = angular.element( document.querySelector('.tabelaDependencia'));
            var fileDependencia = "fileDependencia" + count;
            var result = response.data.replace(/{fileDependencia}/g, fileDependencia);
            angular.element(document.querySelector('.tabelaDependencia')).append(result);
            count ++;
        }, function myError(response) {
            console.log(response.statusText);
        });
    };

    $http({
        method : "GET",
        url : "json/softwares.json"
    }).then(function mySuccess(response) {
        $scope.softwares = response.data;
    }, function myError(response) {
        console.log(response.statusText);
    });

    $http({
        method : "GET",
        url : "json/clientes.json"
    }).then(function mySuccess(response) {
        $scope.clientes = response.data;
    }, function myError(response) {
        console.log(response.statusText);
    });

    

    // $scope.$watch('file', function (result) {
    //     if(result){
    //         $scope.file = result;
    //         console.log($scope.file);
    //     }
    // });

    $scope.clientes = [];

    $scope.softwares = [];

    $scope.clientesAdicionados = [];


    $scope.selecionarCliente = function(cliente){
        $scope.clientesSelecionados =  $scope.clientes.filter(function (cliente){
            if(cliente.selecionado) return cliente;
        });

        $scope.clientesAdicionados = $scope.clientesSelecionados;

        console.log($scope.clientesSelecionados);
    };


    $scope.removerCliente = function(e){
        e.selecionado = false;
        $scope.selecionarCliente(e);
    };

    $scope.limparClientes = function(){
        for(i = 0; i < $scope.clientesAdicionados.length; i++){
            $scope.clientesAdicionados[i].selecionado = false;
        }
        $scope.clientesAdicionados = [];
    };

    $scope.removerArquivoDependencia = function(){
        
    };


    $scope.dadosGerais = [];

    var JsonDados;
    $scope.Enviar =  function(dados){
        $scope.dadosGerais.push(angular.copy(dados));

        delete $scope.file;
        delete $scope.dados;
        // JsonDados = angular.toJson($scope.dadosGerais);
        console.log($scope.dadosGerais);
    }

});