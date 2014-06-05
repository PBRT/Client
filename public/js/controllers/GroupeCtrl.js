app.controller('GroupeCtrl', function ($scope, $rootScope,groupeService){

    $scope.init = function(){
        $scope.groupe= groupeService.getCurrentGroupe();
    console.log($scope.groupe)
        //Mise a jour de la navbar
        $rootScope.currentPage = $scope.groupe.nom;


        //Photos du groupe
        $scope.slides=[{image: "js/1.png",text: "First"},
            {image: "js/2.png",text: "Two"}];
        $scope.myInterval=5000;
    }

});
