;(function(angular, debug) {
  'use strict';
  var log;

  if (!angular)
    throw new Error('Angular.js is required');
  if (debug)
    log = debug('ionic');

  angular
    .module('project', [
      'ionic', 
      'avoscloud',
      'avoscloud-auth'
    ])
    .run(['$ionicPlatform', init])
    .config(['$stateProvider', '$urlRouterProvider', 'avoscloudProvider', config]);

  function init($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      // org.apache.cordova.statusbar required
      if (window.StatusBar)
        StatusBar.styleDefault();

      if (log)
        log($ionicPlatform);
    });
  }

  function config($stateProvider, $urlRouterProvider, avoscloudProvider) {
    // Appkey and AppId configs
    avoscloudProvider.config({
      appId: 'xxx',
      appKey: 'xxx'
    });

    // States Routers
    $stateProvider
      .state('signup', {
        url: '/signup',
        templateUrl: 'templates/signup.html',
        controller: 'sign'
      })
      .state('signin', {
        url: '/signin',
        templateUrl: 'templates/signin.html',
        controller: 'sign'
      })
      // setup an abstract state for the tabs directive
      // .state('tab', {
      //   url: "/tab",
      //   abstract: true,
      //   templateUrl: "templates/tabs.html"
      // })
    
    // 404 Router
    $urlRouterProvider.otherwise('/');
  }

})(window.angular, window.debug);
