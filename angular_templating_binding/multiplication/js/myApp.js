angular.module('myApp', []).
  controller('MultiplicationCtrl', function($scope, $attrs) {
    function populateNumbers(limit) {
      var numbers = [];
      for (var i=0 ; i<limit ; i++) {
        numbers[i] = i + 1;
      }
      return numbers;
    }
    $scope.compute = function(a, b) {
      return a * b;
    };
    $scope.$watch('numberLimit', function(limit) {
      $scope.numbers = populateNumbers($scope.numberLimit);
    });
    $scope.numberLimit = $attrs.initialNumberLimit || 10;
  });

