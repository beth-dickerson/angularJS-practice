var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function($scope, randomNameService, $q) {
    var firstNamePromise = randomNameService.getName('first');
    var middleNamePromise = randomNameService.getName('middle');
    var lastNamePromise = randomNameService.getName('last');

    // firstNamePromise.then(function(name) {$scope.firstName = name;});
    // middleNamePromise.then(function(name) {$scope.middleName = name;});
    // lastNamePromise.then(function(name) {$scope.lastName = name;});

    var allPromisesDone = $q.all([firstNamePromise, middleNamePromise, lastNamePromise]);

    allPromisesDone.then(
        function(data) {
            console.log(data);

            $scope.firstName = data[0];
            $scope.middleName = data[1];
            $scope.lastName = data[2];
        }
    );
});

myApp.factory('randomNameService', function($q, $timeout) {
    var firstName = ['Jane', 'April', 'Ann', 'Joanne', 'Kate', 'Karen'];
    var middleName = ['Anson', 'Bernice', 'Jackie', 'George', 'Iareal', 'Joy'];
    var lastName = ['Smith', 'Nicolas', 'Miller', 'McPhee', 'Roberts'];

    return {
        getName: function(nameType) {

            var defer = $q.defer();
            $timeout(function(){

                var name = '';

                switch(nameType) {
                    case 'first':
                        name = firstName[Math.floor(Math.random() * firstName.length)];
                        break;
                    case 'middle':
                        name = middleName[Math.floor(Math.random() * middleName.length)];
                        break;
                    case 'last':
                        name = lastName[Math.floor(Math.random() * lastName.length)];
                        break;
                }

                defer.resolve(name);

            },  
            Math.random() ^ 3000
            );
            return defer.promise;                  
        }
    }
})