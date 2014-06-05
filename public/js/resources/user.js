resources.factory("User", function ($resource, Server) {
    return $resource(
            Server.addr + "/user/:id",

        {
            "get": {method: "GET"},
            "post": {method: "POST", url: Server.addr + "/user"},
            "put": {method: "PUT"},
            "delete": {method: "DELETE"},
            "getGroupe": {method: "GET", url: Server.addr + "/user/:id/groupes/:groupe_id"},
            "getGroupes": {method: "GET", url: Server.addr + "/user/:id/groupes"}

        }
    );
});
