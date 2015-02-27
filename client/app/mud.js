'use strict';

var mud = angular.module('mud', ['kick']);

mud.controller('MudController', ['$scope', function($scope) {
    $scope.test = "check check, 1-2, 1-2";
}]);
