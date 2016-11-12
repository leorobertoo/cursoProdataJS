/**
 * Created by leonardo on 12/11/2016.
 */

angular.module('pdApp')
    .controller('IndexController', IndexController);



function IndexController($scope){
    $scope.nome = 'Leonardo';

    $scope.ola = ola;


    function ola(){
        alert('olá');
    }

}