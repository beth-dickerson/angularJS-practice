var myApp = angular.module('myApp', []);

myApp.controller('appController', function($scope) {
    $scope.model = {
        firstName: 'John',
        lastName: 'Doe'
    }
});