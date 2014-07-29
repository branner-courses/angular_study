// David Prager Branner
// 20140728

;(function IIFE(window, document, undefined) {
  // Variables
  var origReplmnts;

  // Main loop
  document.addEventListener('DOMContentLoaded', function(){
    'use strict';
    angular.module('myApp', []);
  });
}(window, document));

angular.module('ngMadLibs', []).
  controller('Replacements', function($scope) {

    $scope.reset_userReplmnts = function() {
      $scope.userReplmnts = origReplmnts.slice();
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
        alert('"' + origReplmnts[5] + '" must be a number.');
        // Restore original placeholder.
        $scope.userReplmnts[5] = origReplmnts[5];
        return false;
      }
      // no element of $scope.userReplmnts can be the same as origReplmnts
      else {
        for (var i=0 ; i<origReplmnts.length ; i++) {
          console.log(i, $scope.userReplmnts[i]);
          if ($scope.userReplmnts[i] === origReplmnts[i]) {
            alert('"' + origReplmnts[i] + '" must be changed.');
            return false;
          }
          else if (!$scope.userReplmnts[i]) {
            alert('"' + origReplmnts[i] + '" seems to be empty.');
            // Restore original placeholder.
            $scope.userReplmnts[i] = origReplmnts[i];
            return false;
          }
        }
      return true;
      }
    };
  });

origReplmnts = [
   'Female_name', 'Dirty_task', 'Obnoxious_celebrity', 'Job_title', 
   'Celebrity', 'Huge_number', 'Tedious_task', 'Useless_skill', 
   'Adjective'];
