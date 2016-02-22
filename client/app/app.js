'use strict';

angular.module('matriculasApp', [
  'matriculasApp.auth',
  'matriculasApp.admin',
  'matriculasApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngPageTitle',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/404.html');

    $locationProvider.html5Mode(true);
  });
