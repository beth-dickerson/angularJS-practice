var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function($scope) {
    var g = 'background: green';
    var r = 'background: red';

    // var testValue = {key: 'value'};
    // var testValue = [1,2,3,4];
    // var testValue = new Date();
    // var testValue = angular.element('<p></p>');
    // var testValue = function(){};
    // var testValue = function(){};
    // var testValue = undefined;
    var testValue = 4
   
    // %c allows you to set up CSS
    angular.isObject(testValue) ? console.log(testValue + '%c is an object', g) : console.log(testValue + ' %c is not an object', r);

    angular.isArray(testValue) ? console.log(testValue + '%c is an array', g) : console.log(testValue + ' %c is not an array', r);

    angular.isString(testValue) ? console.log(testValue + '%c is a string', g) : console.log(testValue + ' %c is not a string', r);

    angular.isDate(testValue) ? console.log(testValue + '%c is a date object', g) : console.log(testValue + ' %c is not a date object', r);

    angular.isElement(testValue) ? console.log(testValue + '%c is an element', g) : console.log(testValue + ' %c is not an element', r);

    angular.isFunction(testValue) ? console.log(testValue + '%c is a function', g) : console.log(testValue + ' %c is not a function', r);

    angular.isDefined(testValue) ? console.log(testValue + '%c is defined', g) : console.log(testValue + ' %c is not defined', r);

    angular.isUndefined(testValue) ? console.log(testValue + '%c is undefined', g) : console.log(testValue + ' %c is not undefined', r);

    angular.isNumber(testValue) ? console.log(testValue + '%c is a number', g) : console.log(testValue + ' %c is not a number', r);
})