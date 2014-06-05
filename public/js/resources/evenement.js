var resources = angular.module('apiService', ["ngResource"]);

resources.factory("Evenement",function ($resource, Server) {
    return $resource(
        Server.addr + "/evenement/:id",
        //NOTE: le @ signifie que si le param n'est pas présent il sera extrait de l'objet
        //TODO: à tester avec et sans les paramètres pour les ressources filles
        {id: "@id" },
        {
            //TODO: ajouter les méthodes de l'EvenementController (coté serveur)
            "get" : {method: "GET"},
            "getCurrent" : {method: "GET", url: Server.addr + "/auth"},
            "addOrganisateur" : {method: "POST", url: Server.addr + "/evenement/:id/organisateurs"},
            "deleteOrganisateur" : {method: "DELETE", url: Server.addr + "/evenement/:id/organisateurs/:orga_id"},
            "addIncident": {method: "POST", url: Server.addr + "/evenement/:id/incidents"},
            "editIncident": {method: "PUT", url: Server.addr + "/evenement/:id/incidents/:incident_id"},
            "getIncidents": {method: "GET", url: Server.addr + "/evenement/:id/incidents", isArray: true}
        }
    );
});
