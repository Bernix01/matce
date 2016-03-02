'use strict';

angular.module('matriculasApp')
  .controller('DetalleMatriculaAdminCtrlCtrl', function ($scope, matricula) {
    $scope.matricula = matricula;
  });
