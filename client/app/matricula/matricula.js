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
        controller: 'CrearMatriculaCtrl'
      })
      .state('matricula.detalleMatricula', {
        url: '/{id}/detalle',
        templateUrl: 'app/matricula/ver/detalleMatricula.html',
        controller: 'DetalleMatriculaCtrl',
        controllerAs: 'detMat'
      })
      .state('matricula.editarMatricula', {
        url: '/{id}/editar',
        templateUrl: 'app/matricula/editar/editarMatricula.html',
        controller: 'EditarMatriculaCtrl',
        controllerAs: 'editMat',
        authenticate: 'secretaria'
      });
  });
