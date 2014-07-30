;
(function IIFE(window, document, undefined) {
    // Variables

    // Main loop
    document.addEventListener('DOMContentLoaded', function () {
        'use strict';
        angular.module('myApp', []);
    });
}(window, document));

angular.module('ngMadLibs', []).
controller('Replacements', function ($scope) {
    $scope.replacements = [
        'Female_name', 'Dirty_task', 'Obnoxious_celebrity', 'Job_title',
        'Celebrity', 'Huge_number', 'Tedious_task', 'Useless_skill',
        'Adjective'];
    $scope.user_input = true;
});