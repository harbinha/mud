'use strict';

var mud = angular.module('mud', ['ngRoute']);

mud.controller('MudController', ['$scope', function($scope) {
    $scope.test = "check check, 1-2, 1-2";
}]);
