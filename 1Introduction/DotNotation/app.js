var myApp = angular.module('myApp', []);

myApp.controller('OuterCtrl', function($scope) {
    $scope.val1 = {
        name: "John"
    }
});

myApp.controller('InnerCtrl', function($scope) {
    // child scope can access values in parent scope, if no dot notation
    // with dot notation, child is accessing from parent scope (up the hierarchy), instead of creating new variable
})