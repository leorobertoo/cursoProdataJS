/**
 * Created by leonardo on 12/11/2016.
 */

angular.module('pdApp')
    .controller('IndexController', CadastroCarroController);



function CadastroCarroController($scope, AlertService){
    $scope.entidade = {};
    $scope.listaDeCarros=[];


    $scope.salvar = salvar;
    $scope.limpar = limpar;


    function salvar(){
        $scope.listaDeCarros.push($scope.entidade);
        salvar();

    }
    function limpar(){
        $scope.entidade={};
        $scope.carroForm.$setUntouched();

    }

}