'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'ngRoute',
  'apiService',
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.constants',
  'google-maps',
  // 3rd party dependencies
  'btford.socket-io',
  'ui.bootstrap',
  'snap'
]).
config(function ($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'partials/login',
      controller: 'AuthCtrl'
    }).
    when('/groupe', {
      templateUrl: 'partials/groupe',
      controller: 'GroupeCtrl'
    }).
    when('/home', {
      templateUrl: 'partials/home',
      controller: 'HomeCtrl'
    }).
    otherwise({
      redirectTo: '/login'
    });

 // snapRemoteProvider.globalOptions.disable = 'right';

  $locationProvider.html5Mode(true);

  //NOTE: CORS CREDENTIALS (nécessaire si on continue d'utiliser un deuxième server pour l'application)
  $httpProvider.defaults.withCredentials = true;


}).
run(function($rootScope, $timeout, $location, $route, Auth){

    //Mise a jour de la navbar
    /*$rootScope.$on('$routeChangeStart', function(ev, newRoute, oldRoute){
        if(newRoute.$$route) {
            if (newRoute.$$route.templateUrl == '/partials/login') {
                $rootScope.currentPage = "BANDS";
            }
            if (newRoute.$$route.templateUrl == '/partials/home') {
                $rootScope.currentPage = "HOME";
            }
        }
    })*/
        $rootScope.currentPage ="BANDS"

    $rootScope.resetError = function(){
        $rootScope.error=null;
    };

    $rootScope.resetSuccess = function(){
        $rootScope.success=null;
    };

    $rootScope.$on('$locationChangeSuccess', function(event) {
        //$rootScope.success=null;
        $rootScope.error=null;
    });

    $rootScope.$watch('error', function(newVal, oldVal) {
        $rootScope.success=null;
        $timeout(function(){
            $rootScope.error=null;
        }, 5000);
    });

    $rootScope.$watch('success', function(newVal, oldVal) {
        $rootScope.error=null;
        $timeout(function(){
            $rootScope.success=null;
        }, 5000);
    });

    $rootScope.menu= [
        {name: "Evenements", function : 'te()', icon : "glyphicon glyphicon-th"},
        {name : "Parametres", function: 'te()', icon : "glyphicon glyphicon-wrench"},
        {name: "Déconnexion", function : 'logout()', icon : "glyphicon glyphicon-remove"}
    ]

    $rootScope.te = function(){
        alert('oooo')
    }


        $rootScope.home = function(){
        $location.path('/home')
    };

    $rootScope.logout = function() {
        Auth.logout();
    };

    });
