angular.module('myApp', []).
  controller('MultiplicationCtrl', function($scope, $attrs) {
    function populateNumbers(limit) {
      var numbers = [];
      for (var i=0 ; i<limit ; i++) {
        numbers[i] = i + 1;
      }
      return numbers;
    }
    $scope.numberLimit = $attrs.initialNumberLimit || 10;
    $scope.numbers = populateNumbers($scope.numberLimit);
  });

