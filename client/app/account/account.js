'use strict';

angular.module('matriculasApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('logout', {
        url: '/logout?referrer',
        referrer: 'main',
        template: '',
        controller: function($state, Auth, $rootScope) {
          var referrer = $state.params.referrer ||
            $state.current.referrer ||
            'main';
          Auth.logout();
          console.log();
          $state.go(referrer, $rootScope.returnToStateParams);
        }
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupController',
        controllerAs: 'vm',
        authenticate: 'admin'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'vm',
        authenticate: true
      });
  })
  .run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, current, currentParams) {
      if (next.name === 'logout' && current && current.name && !current.authenticate) {
        next.referrer = current.name;
        console.log(currentParams);
        $rootScope.returnToStateParams = currentParams;
      }
      if (next.name === "admin") {
        event.preventDefault();
        $state.go('admin.users');
      }
    });
  });
