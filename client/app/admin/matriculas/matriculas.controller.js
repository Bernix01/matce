'use strict';

(function() {

  class MatriculasCtrl {
    constructor($http, socket, appConfig, $scope) {
      this.$http = $http;
      var self = this;
      self.nivelesDisponibles = appConfig.nivelesDisponibles;
      $http.get('/api/ordenMatriculas/').then(response => {
        self.matriculas = response.data;
        // $scope.noOfPages= Math.floor(self.matriculas.length/$scope.entryLimit);
        // console.log($scope.noOfPages);
        socket.syncUpdates('ordenMatricula', this.matriculas);
      });
      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('ordenMatricula');
      });
      $scope.filter2 = function (matricula,input) {
        return self.nivelesDisponibles.indexOf(input) === matricula.nivel;
      }
      $scope.currentPage = 1;
      $scope.entryLimit = 10;
      $scope.noOfPages= 5;
    }

    deleteMatricula(matricula) {
      var self = this;
      if (confirm("Seguro que desea borrar la orden de mátricula?")) {
        this.$http.delete('/api/ordenMatriculas/' + matricula._numOrden).then(response => {
          alert("Orden eliminada con éxito.");
          this.matriculas.splice(this.matriculas.indexOf(matricula), 1);
          socket.unsyncUpdates('ordenMatricula');
        });
      }
    }
  }

  angular.module('matriculasApp.admin')
    .controller('MatriculasCtrl', MatriculasCtrl);

})();
