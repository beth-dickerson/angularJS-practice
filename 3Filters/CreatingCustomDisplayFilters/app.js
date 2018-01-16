var myApp = angular.module('myApp', []);

myApp.controller('appController', function($scope) {

    $scope.specialsList = {
        "Apple": {"name": "Apple", "priceInDollars": 1.50},
        "Banana": {"name": "Banana", "priceInDollars": 2},
        "Cherry": {"name": "Cherries", "priceInDollars": 2.5},
        "Eggs": {"name": "12 Eggs", "priceInDollars": 2.12},
        "Figs": {"name": "6 Figs", "priceInDollars": 2.99}
    };

    $scope.description = "This controller contains a list of food specials";

});

myApp.filter('dashes', function() {
    return function(text) {
        var chars = text.split('');
        return chars.join('-');
    }
})