'use strict';

/**
 * @ngdoc overview
 * @name portalWebApp
 * @description
 * # portalWebApp
 *
 * Main module of the application.
 */
angular
    .module('portalWebApp', [
        'ngRoute',
        'ngSanitize',
        'ngMessages',
        'ui.bootstrap',
        'ui.grid'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'AccountController'
            })
            .when("/register", {
                templateUrl: 'views/register.html',
                controller: 'RegisterController'
            })
            .when("/reporteTrazabilidad", {
                templateUrl: 'views/reporteTrazabilidad.html',
                controller: 'ReporteTrazabilidadController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });