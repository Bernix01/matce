'use strict';

angular.module('matriculasApp')
  .config(function ($stateProvider) {
    $stateProvider
    .state('detalle',{
        url:'/matricula/detalle/{id}',
        templateUrl: 'app/matricula/ver/detalleMatricula.html',
        controller: 'DetalleMatriculaCtrl',
        controllerAs: 'detMat'
      });
  });
