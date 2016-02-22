'use strict';

(function() {

  class DetalleMatriculaCtrl {
    constructor($http, $scope, $stateParams,socket) {
      $http.get('/api/ordenMatriculas/' + $stateParams.id).then(response => {
        this.detalleOrden = response.data;
        socket.syncUpdates('orden', this.detalleOrden);
      });
    }
  }

  angular.module('matriculasApp')
    .controller('DetalleMatriculaCtrl', DetalleMatriculaCtrl);

})();
