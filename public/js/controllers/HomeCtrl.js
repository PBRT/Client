app.controller('HomeCtrl', function ($scope, $location,$rootScope, Auth, groupeService, Groupe,Evenement){

    $scope.init= function(){

        //Recuperation des données de l'utilisateur
        $scope.utilisateur =  Auth.getCurrentUser();
        $scope.events = [];
        $scope.getEventList(function(list){
            $scope.events=list;
            console.log($scope.events)
        })

        //Photos
        $scope.slides=[{image: "js/1.png",text: "First"},
                       {image: "js/2.png",text: "Two"}];
        $scope.myInterval=5000;

        //Mise a jour de la navbar
        $rootScope.currentPage = "HOME";
    }

    $scope.checkGroupe = function(val){
        groupeService.setCurrentGroupe(val);
        $location.path('/groupe');
    }

    $scope.getEventList = function(cb){
        var i =0;
        var eventList=[];

        for(i=0; i<$scope.utilisateur.groupes.length; i++) {
            Groupe.get({id: $scope.utilisateur.groupes[i].id},function(groupe){
                var j=0;
                for(j=0;j<groupe.evenements.length;j++){
                    eventList.push(groupe.evenements[j])
                }
                if(i==$scope.utilisateur.groupes.length);
                    cb(eventList)
            });

        }
    }

})

