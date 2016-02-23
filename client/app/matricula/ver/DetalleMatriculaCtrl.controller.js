'use strict';

(function() {

  class DetalleMatriculaCtrl {
    constructor($http, $scope, $state, $stateParams,socket, appConfig,Auth) {
      $scope.nivelTitulo = appConfig.nivelTitulo;
      $scope.nivelesDisponibles = appConfig.nivelesDisponibles;
      this.isAdmin = Auth.isAdmin;
      this.$stateParams = $stateParams;
      this.$http = $http;
      this.$state = $state;
      $http.get('/api/ordenMatriculas/' + $stateParams.id).then(response => {
        this.detalleOrden = response.data;
        socket.syncUpdates('orden', this.detalleOrden);
      });
    }


  borrar() {
    var self = this;
    if(confirm("Seguro que desea borrar la orden de mátricula?")){
      this.$http.delete('/api/ordenMatriculas/' + this.$stateParams.id).then(response =>{
        alert("Orden eliminada con éxito.");
        self.$state.go("admin");
      });
    }
  }
}

  angular.module('matriculasApp')
    .controller('DetalleMatriculaCtrl', DetalleMatriculaCtrl);

})();
