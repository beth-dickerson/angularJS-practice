var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function($scope) {
    $scope.model = {
        'firstName': 'John',
        'lastName': 'Doe',
        'dob': {
            'month': 'February',
            'day': '1',
            'year': '1991'
        }
    }
})