var app = angular.module('myApp.controllers', []);

/* Controllers */
app.controller('MainCtrl', function ($scope, $location, Auth, snapRemote, socket, $rootScope){

  /*socket.on('send:time', function (data) {
    $scope.time = data.time;
  });*/

  $scope.init = function(){
      $rootScope.currentPage ="BANDS"

      $scope.leftMenu = [{name: "Parametres", function: 'te()', icon: "glyphicon glyphicon-user"},
          {name: "Logout", function: 'te()', icon: "glyphicon glyphicon-user"} ]
  }
  $scope.te = function(){
      alert('oooo')
  }

  $scope.userLoggedIn = function(){
    return Auth.isLoggedIn();
  }


  $scope.$on('authLoaded', function() {

  });

  // Fonction de logout
  $scope.logoutUser = function() {
    Auth.logout();
    snapRemote.close();
  }




});
