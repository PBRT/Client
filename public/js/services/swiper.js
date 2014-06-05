'use strict';

services.factory('Swiper', function($rootScope){
  /* NOTE: Pour l'instant on utilise qu'un seul swiper donc une variable swiper est suffisante.
   TODO: Si besoin d'autres swiper créer un tableau et implémenter les fonctions nécessaires avec l'utilisation d'un id de swiper
   */
  var swiper;
    return {
      initSwiper: function(element){
        swiper = element.swiper({
                                    //Your options here:
                                    mode:'horizontal',
                                    onSlideChangeEnd: function(swiper, direction){
                                      $rootScope.$broadcast("SlideChanged");
                                      $rootScope.$digest()
                                    },
                                    simulateTouch: false
                                });
      },
      getSwiper: function() {
        return swiper;
      },
      swipeNext: function(){
        swiper.swipeNext();
      },
      swipePrev: function(){
        swiper.swipePrev();
      },
      goTo: function(index){
        swiper.swipeTo(index, 100, true);
      },
      activeIndex: function(){
        return swiper.activeIndex;
      }
  }
})

