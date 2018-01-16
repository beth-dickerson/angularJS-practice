var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function($scope) {
    $scope.model = {};

    $scope.submitForm = function(form) {
        if (form.$valid) {
            alert(
                'Passed!'
            );
        } else {
            alert(
                'Failed'
            );
        }
    }
})