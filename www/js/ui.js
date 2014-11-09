;(function(angular, debug) {
  'use strict';

  if (!angular)
    throw new Error('Angular.js is required');

  angular
    .module('project')
    .controller('UI', [
      '$scope',
      '$ionicLoading',
      '$ionicPopup',
      ctrlerUI
    ]);

  function ctrlerUI(scope, $ionicLoading, $ionicPopup) {
    scope.loading = {
      show: function(msg) {
        return $ionicLoading.show({
          template: msg
        });
      },
      hide: function() {
        return $ionicLoading.hide();
      }
    };
    scope.alert = function(obj, callback) {
      $ionicPopup.alert(obj).then(callback);
    };
    scope.confirm = function(obj, callback) {
      $ionicPopup.confirm(obj).then(callback);
    };
    scope.popup = function(obj, callback) {
      $ionicPopup.show(obj).then(callback);
    };
  }

})(window.angular, window.debug);