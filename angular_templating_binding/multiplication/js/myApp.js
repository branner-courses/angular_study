// David Prager Branner
// 20140727

;(function IIFE(window, document, undefined) {
  // Variables
  var numbers,
      activeFactorA, 
      activeFactorB;
  // Main loop
  angular.module('myApp', []);
}(window, document));

angular.module('myApp').
  controller('DisplayCtrl', function($scope) {
    $scope.$on('displayData', function(event, data) {
      $scope.content = data;
    });
  }).
  controller('MultiplicationCtrl', function($scope, $attrs, $rootScope) {
    function populateNumbers(limit) {
      numbers = [];
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

    $scope.setActiveFactors = function(a, b) {
      activeFactorA = a;
      activeFactorB = b;
    };

    $scope.matchesFactor = function(a, b) {
      return a === activeFactorA || b == activeFactorB;
    };

    $scope.clearActiveFactors = function() {
      activeFactorA = activeFactorB = null;
    };

    $scope.setActiveNumber = function(number) {
      $rootScope.$broadcast('displayData', number);
    };
  });

