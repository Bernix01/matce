'use strict';

angular.module('matriculasApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('matricula', {
        url: '/matricula',
        templateUrl: 'app/matricula/matricula.html',
        controller: 'MatriculaCtrl',
        controllerAs: 'mat'
      }).state('detalle',{
        url:'/matricula/detalle/{id}',
        templateUrl: 'app/matricula/detalleMatricula.html',
        controller: 'DetalleMatriculaCtrl',
        controllerAs: 'detMat'
      });
  });
