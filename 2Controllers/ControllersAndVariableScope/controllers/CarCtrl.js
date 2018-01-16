function CarCtrl ($scope) {
    // wherever I add access to this controller, I'll have access to these variables

    $scope.cars = {
        "BMW": {"make": "BMW", "model": "1 Series", "year": "2010"},
        "Audi": {"make": "Audi", "model": "A4", "year": "2008"},
        "Mercedes": {"make": "Mercedes", "model": "C-Class", "year": "2009"},
        "Honda": {"make": "Honda", "model": "Civic", "year": "2013"},
        "Ford": {"make": "Ford", "model": "Focus", "year": "2012"},
    };

    $scope.description = "This controller contains a list of cars";

}