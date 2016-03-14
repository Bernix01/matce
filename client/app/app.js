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
  .config(function($urlRouterProvider, $locationProvider, $compileProvider) {
    // $compileProvider.debugInfoEnabled(false);
    $urlRouterProvider
      .otherwise('/404.html');
    $locationProvider.html5Mode(true);
    String.prototype.capitalize = function(lower) {
    return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    };
  });
