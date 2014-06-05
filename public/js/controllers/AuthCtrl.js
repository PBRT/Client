
/* Controllers */
app.controller('AuthCtrl', function ($scope, $location, Auth,$rootScope, Swiper){

    //Variables pour le login et pour la création de nouveaux comptes
    $scope.user = null;
    $scope.newUser = null;

    //Index du swiper
    $scope.activeIndex = 0;
    $rootScope.error = null;


    /******************************************************************************
     *
     *                   Fonctions liées à l'authentification
     *
     *****************************************************************************/

    $scope.loginUser = function() {
        Auth.login({
            username: $scope.user.username,
            password: $scope.user.password
        }).error(function(){
            $rootScope.error = "Nom d'utilisateur ou mot de passe erroné";
            console.log("fail")
        })
    }
    $scope.createUser = function() {
        if($scope.newUser.password == $scope.newUser.passwordConfirmation) {
            Auth.create({
                username: $scope.newUser.username,
                password: $scope.newUser.password,
                pseudoFb: $scope.newUser.pseudoFb
            }).error(function () {
                $rootScope.error = "Nom d'utilisateur ou mot de passe erroné";
            })
        } else {
            $scope.error="Mot de passe et confirmation non identiques !"
        }
    }

    /******************************************************************************
     *
     *       Fonctions de manipulation du Swiper de la page de sign-in/sign_up
     *
     *****************************************************************************/

    $scope.$on('SlideChanged', function() {
        $scope.activeIndex=Swiper.activeIndex();
    });

    $scope.activeSlide = function(){
        Swiper.activeIndex();
    }

    $scope.swipeNext = function(){
        Swiper.swipeNext();
    }

    $scope.swipePrev = function(){
        Swiper.swipePrev();
    }

    $scope.goToSignIn = function(){
        Swiper.goTo(1);
    }

    $scope.goToSignUp = function(){
        Swiper.goTo(0);
    }
});
