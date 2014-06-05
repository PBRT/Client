'use strict';

var services = angular.module('myApp.services', []);

//TODO: fonctionnement à revoir/améliorer
services.factory('Auth', function($http, $location, $rootScope, $timeout,  Server){

    //Utilisateur courant de l'application
    var currentUser=null;

    return {
      isLoggedIn: function(){ if(currentUser){
              return true;
          } else {
              return false;
          }
      },

      //Renvoie l'utilisateur courant
      getCurrentUser: function(){
         return currentUser;
      },

      //Si login succes, set l'utilisateur courant et redirection
      load: function() {
          $http.get(Server.addr + '/auth').success(function(data){
              currentUser = data;
              $rootScope.$broadcast("userLoggedIn");
              $location.path("/home");
        })
      },

      //Mise a null de l'utilisateur courant
      logout: function() {
        $http.get(Server.addr + '/auth/logout').success(function(data){
          currentUser=null;
          $rootScope.$broadcast("userLoggedOut");
          $location.path("/");
        });
      },

      //Requete de login
      login: function(inputs) {
        var self=this;
        return $http.post(Server.addr + '/auth/login', inputs).success(function(data){
            $rootScope.success = "Login successs";
            self.load();
        })
      },

      //Requete de création
      create: function(input){
          return $http.post(Server.addr + '/auth/signup', input).success(function(data) {
              $rootScope.success = "Utilisateur crée avec success";
          })
      }
  }
})
