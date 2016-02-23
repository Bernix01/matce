'use strict';

angular.module('matriculasApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('editarMatricula', {
        url: '/matricula/editar/{id}',
        templateUrl: 'app/matricula/editarMatricula/editarMatricula.html',
        controller: 'EditarMatriculaCtrl',
        controllerAs: 'editMat',
        authenticate: 'admin'
      });
  });
