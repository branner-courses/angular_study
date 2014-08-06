// David Prager Branner
// 20140803

angular.module('waitStaff', []).
 controller('Calculator', function($scope) {

  $scope.reset = function() {
    $scope.custmrSubtotal = 0;
    $scope.custmrTip = 0;
    $scope.custmrTotal = 0;
    $scope.tipTotal = 0;
    $scope.mealCount = 0;
    $scope.avgTip = 0;
    $scope.cancel();
  };

  $scope.updateResult = function () {
    // Customer charges
    $scope.custmrSubtotal = $scope.baseMealPrice * (1 + ($scope.taxRate / 100));
    $scope.custmrTip = $scope.custmrSubtotal * ($scope.tipPc / 100);
    $scope.custmrTotal = $scope.custmrSubtotal + $scope.custmrTip;

    // My earnings info
    $scope.tipTotal += $scope.custmrTip;
    $scope.mealCount++;
    $scope.avgTip = $scope.tipTotal / $scope.mealCount;
  };

  $scope.cancel = function() {
    $scope.baseMealPrice = '';
//    Once taxRate has been added, leave it in.
//    $scope.taxRate = '';
    $scope.tipPc = '';
  };

  $scope.reset();
});

