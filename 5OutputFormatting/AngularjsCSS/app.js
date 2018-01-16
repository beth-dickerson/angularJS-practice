var myApp = angular.module('myApp', []);

myApp.controller('appController', function($scope) {
    $scope.value = "I'm a scope variable named value";
    $scope.userInput = "";
});