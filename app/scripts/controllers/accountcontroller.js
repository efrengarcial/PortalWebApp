'use strict';

/**
 * @ngdoc function
 * @name portalWebApp.controller:AccountController
 * @description
 * # AccountController
 * Controller of the portalWebApp
 */
angular.module('portalWebApp')
    .controller('AccountController', function($scope ,$location) {

    	$scope.createAccount = function () {
            $location.path("/register");
        }

    });