'use strict';

(function() {

  class DetalleMatriculaCtrl {
    constructor($http, $scope, $state, $stateParams, socket, appConfig, Auth) {
      $scope.nivelTitulo = appConfig.nivelTitulo;
      this.isAdmin = Auth.isAdmin;
      this.$stateParams = $stateParams;
      this.$http = $http;
      this.$state = $state;
      var self = this;
      $http.get('/api/ordenMatriculas/' + $stateParams.id).then(response => {
        self.detalleOrden = response.data;
        socket.syncUpdates('ordenMatricula', this.detalleOrden, function(event, oldArticle, newArticle) {
          self.detalleOrden = newArticle;
        });

      });
      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('ordenMatricula');
      });
    }


    borrar() {
      if (!this.isAdmin()) {
        alert("No autorizado a realizar esta operación!");
        return;
      }
      var self = this;
      if (confirm("Seguro que desea borrar la orden de mátricula?")) {
        this.$http.delete('/api/ordenMatriculas/' + this.$stateParams.id).then(response => {
          alert("Orden eliminada con éxito.");
          socket.unsyncUpdates('ordenMatricula');
          self.$state.go("admin");
        });
      }
    }
  }

  angular.module('matriculasApp')
    .controller('DetalleMatriculaCtrl', DetalleMatriculaCtrl);

})();
