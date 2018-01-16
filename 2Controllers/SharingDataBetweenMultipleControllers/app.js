var myApp = angular.module('myApp', []);

myApp.factory('Share', function() {
    return {sharedMessage: "I am shared"};
});

function controllerA($scope, Share) {
    $scope.value = "Hello from controller A";
    //$scope.sharedValue = 'value@A';
    $scope.sharedValue = Share;
}

function controllerB($scope, Share) {
    $scope.value = "Hello from controller B";
    //$scope.sharedValue = 'value@B';
    $scope.sharedValue = Share;
}