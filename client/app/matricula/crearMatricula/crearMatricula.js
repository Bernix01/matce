'use strict';

angular.module('matriculasApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('crearMatricula', {
        url: '/matricula/solicitar',
        templateUrl: 'app/matricula/crearMatricula/crearMatricula.html',
        controller: 'CrearMatriculaCtrl'
      });
  });
