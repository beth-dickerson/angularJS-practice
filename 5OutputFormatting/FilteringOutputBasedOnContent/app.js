var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function($scope) {
    $scope.foodList = [
        {name: "Apples", url: "images/apple.jpg", group: "Fruits"},
        {name: "Banana", url: "images/banana.jpg", group: "Fruits"},
        {name: "Beans", url: "images/beans.jpg", group: "Vegetables"},
        {name: "Bread", url: "images/bread.jpg", group: "Grains"},
        {name: "Carrots", url: "images/carrots.jpg", group: "Vegetables"},
        {name: "Cereal", url: "images/ceareal.jpg", group: "Grains"},
        {name: "Cheese", url: "images/cheese.jpg", group: "Dairy"},
        {name: "Chicken", url: "images/chicken.jpg", group: "Meats"},
        {name: "Eggs", url: "images/eggs.jpg", group: "Dairy"},
        {name: "Random name with Fruits in it", url: "images/eggs.jpg", group: "Dairy"}
    ];

    $scope.selectedFoodGroup = "";
});