services.factory('groupeService', function($http, $location, $rootScope, $timeout,  Server, Groupe){

    //Variable qui va contenir la totalité des informations du groupe courant
    var currentGroupe;

    return{

        //Renvoie le groupe courant
        getCurrentGroupe: function(){
            return currentGroupe;
        },
        setCurrentGroupe : function(gpe){
            Groupe.get({id: gpe.id}, function(groupe){
                console.log(groupe)
                currentGroupe=groupe;
            },function(err){
                console.log(err)
            })
            currentGroupe=gpe;

        }
    }
})
