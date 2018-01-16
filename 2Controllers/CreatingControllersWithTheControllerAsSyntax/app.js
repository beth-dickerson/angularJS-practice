var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function($scope) {

    $scope.value = "Hi from myCtrl";
});

myApp.controller('anotherCtrl', function() {

    this.value = "Hi from anotherCtrl";

})