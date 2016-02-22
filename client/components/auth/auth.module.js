'use strict';

angular.module('matriculasApp.auth', [
  'matriculasApp.constants',
  'matriculasApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
