'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }).
  directive('jqueryMobileTpl', function() {
    return {
      link: function(scope, elm, attr) {
        elm.hide();
        elm.trigger('create');
        elm.show();
      }
    };
  }).
  directive('swipable', function(Swiper) {
    function link(scope, element) {
      Swiper.initSwiper(element);
    }
    return {
      link: link
    };
  });
