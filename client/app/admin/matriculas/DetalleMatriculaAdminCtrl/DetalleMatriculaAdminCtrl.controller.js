'use strict';
'use strict';

(function() {

  class DetalleMatriculaAdminCtrl {
    constructor($scope, matricula, appConfig) {
      $scope.matricula = matricula;
      $scope.nivelTitulo = appConfig.nivelTitulo;
      $scope.tiposSangre = appConfig.tiposSangre;
    }
  }
  angular.module('matriculasApp.admin')
    .controller('DetalleMatriculaAdminCtrl', DetalleMatriculaAdminCtrl);

})();
