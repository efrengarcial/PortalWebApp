'use strict';

/**
 * @ngdoc function
 * @name portalWebApp.controller:RegisterController
 * @description
 * #RegisterController
 * Controller of the portalWebApp
 */
angular.module('portalWebApp')
    .controller('RegisterController', function($scope, $log) {

        $scope.register = {
            ID: null,
            Email: null,
            Password: null,
            Password2: null
        };
        
        $log.debug($scope.register);


        $scope.interacted = function(field) {
            return $scope.submitted || field.$dirty;
        };        

        $scope.userResgister = function(isValid) {
	        $log.debug(isValid);
        	if (isValid) {
	            $log.debug($scope.register);
        	};
        }
    });
