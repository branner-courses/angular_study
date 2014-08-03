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
        subject: 'they', possessive: 'their', object: 'them'
      },
      male: {
        subject: 'he', possessive: 'his', object: 'him'
      },
      female: {
        subject: 'she', possessive: 'her', object: 'her'
      },
    };

    $scope.initialize_userReplmnts = function() {
      $scope.userReplmnts = $scope.origReplmnts.slice();
      $scope.userInput = true;
    };

    $scope.initialize_userReplmnts();

    $scope.generateMadLib = function() {
      $scope.userInput = false; 
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
