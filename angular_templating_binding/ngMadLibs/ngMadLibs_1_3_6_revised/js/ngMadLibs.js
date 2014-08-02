// David Prager Branner
// 20140802

angular.module('ngMadLibs', []).
  controller('Replacements', function($scope) {
    $scope.origReplmnts = [
      {name: 'Female_name', placeholder: 'Female name', type:'text'}, 
      {name: 'Dirty_task', placeholder: 'Dirty task', type:'text'}, 
      {name: 'Obnoxious_celebrity', placeholder: 'Obnoxious celebrity', type:'text'}, 
      {name: 'Job_title', placeholder: 'Job title', type:'text'},   
      {name: 'Celebrity', placeholder: 'Celebrity', type:'text'}, 
      {name: 'Huge_number', placeholder: 'Huge number', type:'number'}, 
      {name: 'Tedious_task', placeholder: 'Tedious task', type:'text'}, 
      {name: 'Useless_skill', placeholder: 'Useless skill', type:'text'}, 
      {name: 'Adjective', placeholder: 'Adjective', type:'text'}];

    $scope.reset_userReplmnts = function() {
      $scope.userReplmnts = $scope.origReplmnts.slice();
    };

    $scope.userInput = true;
    $scope.reset_userReplmnts();

    $scope.toggle = function() {
      $scope.userInput = !$scope.userInput;
    };

    $scope.generateMadLib = function() {
      if ($scope.validate($scope.userReplments)) {
        $scope.toggle();
      }
    };

    $scope.resetMadLib = function() {
      $scope.reset_userReplmnts();
      $scope.toggle();
    };

    $scope.validate = function() {
      console.log('$scope.userReplmnts: ' + $scope.userReplmnts);
      // userReplmnts[5] must be number
      if (isNaN($scope.userReplmnts[5])) {
        alert('"' + $scope.origReplmnts[5] + '" must be a number.');
        // Restore original placeholder.
        $scope.userReplmnts[5] = $scope.origReplmnts[5];
        return false;
      }
      // no element of $scope.userReplmnts can be the same as origReplmnts
      else {
        for (var i=0 ; i<$scope.origReplmnts.length ; i++) {
          console.log(i, $scope.userReplmnts[i]);
          if ($scope.userReplmnts[i] === $scope.origReplmnts[i]) {
            alert('"' + $scope.origReplmnts[i] + '" must be changed.');
            return false;
          }
          else if (!$scope.userReplmnts[i]) {
            alert('"' + $scope.origReplmnts[i] + '" seems to be empty.');
            // Restore original placeholder.
            $scope.userReplmnts[i] = $scope.origReplmnts[i];
            return false;
          }
        }
      return true;
      }
    };
  });

