// David Prager Branner
// 20140802

angular.module('ngMadLibs', []).
  controller('Replacements', function($scope) {
    $scope.origReplmnts = [
      {name: 'Given_name', placeholder: 'Given name', type:'text'}, 
      {name: 'Dirty_task', placeholder: 'Dirty task', type:'text'}, 
      {name: 'Obnoxious_celebrity', placeholder: 'Obnoxious celebrity', type:'text'}, 
      {name: 'Job_title', placeholder: 'Job title', type:'text'},   
      {name: 'Celebrity', placeholder: 'Celebrity', type:'text'}, 
      {name: 'Huge_number', placeholder: 'Huge number', type:'number'}, 
      {name: 'Tedious_task', placeholder: 'Tedious task', type:'text'}, 
      {name: 'Useless_skill', placeholder: 'Useless skill', type:'text'}, 
      {name: 'Adjective', placeholder: 'Adjective', type:'text'}];

    $scope.pronouns = {
      unknown: {
        subject: 'they', possessive: 'their', object: 'them', checked: 'checked'
      },
      male: {
        subject: 'he', possessive: 'his', object: 'him', checked: 'false'
      },
      female: {
        subject: 'she', possessive: 'her', object: 'her', checked: 'false'
      },
    };

    $scope.initialize_userReplmnts = function() {
      $scope.userReplmnts = $scope.origReplmnts.slice();
      $scope.userInput = true;
    };

    $scope.userInput = true;
    $scope.initialize_userReplmnts();

    $scope.generateMadLib = function() {
      if (!$scope.chosenPronoun) {
        $scope.chosenPronoun = $scope.pronouns.unknown;
      }
      if ($scope.validate($scope.userReplments)) {
        $scope.userInput = false; 
      }
    };

    $scope.resetMadLib = function() {
      $scope.initialize_userReplmnts();
    };

    $scope.validate = function() {
      for (var i=0 ; i<$scope.userReplmnts.length ; i++) {
        if ($scope.userReplmnts[i].$pristine) {
          alert($scope.item + '" must be changed.');
          return false;
        }
      }
      return true;
    };
});
      /*
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
      return true; */

