var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', function($scope) {
    $scope.model = {
        firstName: 'James',
        lastName: 'Smith'
    };

    $scope.testFuntion = function() {
        alert('Hi from Angular');
    }
})