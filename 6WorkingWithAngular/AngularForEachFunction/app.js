var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function($scope) {
    var greetings = ["Hi", "What's up?", "How's it going?", "Hello"];
    var names = ["Anelle", "Anya", "Lynn", "Chris", "Derek", "Wade"];

    $scope.greetingSentences = [];

    angular.forEach(names, function(name) {
        var randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        var tempSentence = randomGreeting + name;
        $scope.greetingSentences.push(tempSentence);
    });
});