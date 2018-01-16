var myApp = angular.module('myApp', []);

myApp.controller('DivideCtrl', function($scope) {

    $scope.numberData = {
        value1: 1,
        value2: 1
    }

    $scope.divide = function(val1, val2) {
        // error- i forget how to make the alert window pop up here
        alert(val1/val2);
    }
});

function myFunction() {
    alert("Hello\nHow are you?");
}