'use strict';

angular.module('matriculasApp', [
    'matriculasApp.auth',
    'matriculasApp.constants',
    'matriculasApp.admin',
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
    $urlRouterProvider.when("/admin", "/admin/users");
    $locationProvider.html5Mode(true);
  });
