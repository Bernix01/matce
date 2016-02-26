'use strict';

angular.module('matriculasApp.admin')
  .config(function($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'admin',
        authenticate: 'secretaria'
      }).state('admin.users', {
        url: '/users',
        templateUrl: 'app/admin/users/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'vm',
        authenticate: 'administrador'
      }).state('admin.matriculas', {
        url: '/matriculas',
        templateUrl: 'app/admin/matriculas/matriculas.html',
        controller: 'MatriculasCtrl',
        controllerAs: 'vm',
        authenticate: 'secretaria'
      });
  });
