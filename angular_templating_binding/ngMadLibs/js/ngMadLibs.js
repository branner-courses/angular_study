// David Prager Branner
// 20140805

angular.module('ngMadLibs', ['']).
  controller('Replacements', function($scope) {
    $scope.origReplmnts = [
      {name: '', placeholder: 'Given name', 
                 temp: '{{Given_name }}', type:'text'}, 
      {name: '', placeholder: 'Dirty task', 
                 temp: '{{Dirty_task }}', type:'text'}, 
      {name: '', placeholder: 'Obnoxious celebrity', 
                 temp: '{{Obnoxious_celebrity }}', type:'text'}, 
      {name: '', placeholder: 'Job title', 
                 temp: '{{Job_title }}', type:'text'},   
      {name: '', placeholder: 'Celebrity', 
                 temp: '{{Celebrity }}', type:'text'}, 
      {name: '', placeholder: 'Huge number', 
                 temp: '{{Huge_number }}', type:'number'}, 
      {name: '', placeholder: 'Tedious task', 
                 temp: '{{Tedious_task }}', type:'text'}, 
      {name: '', placeholder: 'Useless skill', 
                 temp: '{{Useless_skill }}', type:'text'}, 
      {name: '', placeholder: 'Adjective', 
                 temp: '{{Adjective }}', type:'text'}
    ];

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
      $scope.userReplmnts = JSON.parse(JSON.stringify($scope.origReplmnts));
      $scope.chosenPronoun = '';
      $scope.userInput = true;
    };

    $scope.initialize_userReplmnts();

    $scope.generateMadLib = function() {
      $scope.userInput = false; 
    };

    $scope.resetMadLib = function() {
      $scope.initialize_userReplmnts();
    };

});
