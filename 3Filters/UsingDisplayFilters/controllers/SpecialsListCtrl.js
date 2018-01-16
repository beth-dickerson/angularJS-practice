function SpecialsListCtrl ($scope) {
    $scope.specialsList = {
        "Apple": {"name": "Apple", "priceInDollars": 1.50, "salePriceInDollars": "1", "specialDate": "Monday"},
        "Banana": {"name": "Banana", "priceInDollars": 2, "salePriceInDollars": "1.75", "specialDate": "Tuesday"},
        "Cherry": {"name": "Cherries", "priceInDollars": 2.5, "salePriceInDollars": "2", "specialDate": "Wednesday"},
        "Eggs": {"name": "12 Eggs", "priceInDollars": 2.12, "salePriceInDollars": "2", "specialDate": "Thursday"},
        "Figs": {"name": "6 Figs", "priceInDollars": 2.99, "salePriceInDollars": "2", "specialDate": "Friday"}
    };

    $scope.description = "This controller contains a list of food specials";
}