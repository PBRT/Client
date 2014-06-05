resources.factory("Groupe", function ($resource, Server) {
    return $resource(
            Server.addr + "/groupe/:id",

        {
            "get" : {method: "GET"}
        }
    );
});
