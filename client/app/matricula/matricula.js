'use strict';

angular.module('matriculasApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('matricula', {
        data: {
          pageTitle: 'Orden de matrícula'
        },
        url: '/matricula',
        templateUrl: 'app/matricula/matricula.html',
        controller: 'MatriculaCtrl',
        controllerAs: 'mat'
      })
      .state('matricula.crearMatricula', {
        url: '/solicitar',
        templateUrl: 'app/matricula/crear/crearMatricula.html',
        controller: 'CrearMatriculaCtrl',
        controllerAs: 'vm'
      })
      .state('matricula.detalleMatricula', {
        url: '/{id}/detalle',
        templateUrl: 'app/matricula/ver/detalleMatricula.html',
        controller: 'DetalleMatriculaCtrl',
        controllerAs: 'detMat'
      })
      .state('matricula.editarMatricula', {
        url: '/{id}/editar',
        templateUrl: 'app/matricula/crear/crearMatricula.html',
        controller: 'EditarMatriculaCtrl',
        controllerAs: 'vm',
        authenticate: 'secretaria'
      });
  });
