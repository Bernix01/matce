'use strict';

(function() {

  class EditarMatriculaCtrl {

    constructor($http, $state, $stateParams, socket, $scope, appConfig) {
      $scope.nivelTitulo = appConfig.nivelTitulo;
      var self = this;
      this.matricula = {};
      this.errors = {};
      this.submitted = false;
      this.$state = $state;
      this.$http = $http;
      this.$state = $state;
      this.date = Date.now();
      $scope.fruits = [{
        name: 'Padre',
        selected: true
      }, {
        name: 'Madre',
        selected: true
      }, {
        name: 'Hermanos/as',
        selected: false
      }, {
        name: 'Tios/as',
        selected: false
      }, {
        name: 'Primos/as',
        selected: false
      }, {
        name: 'Abuelo/a',
        selected: false
      }, {
        name: 'Otros',
        selected: false
      }];
      $scope.selectedItem = 0;
      $scope.selectedItem2 = 0;

      $scope.nivelesDisponibles = appConfig.nivelesDisponibles;

      // selected fruits
      $scope.selection = [];

      // helper method to get selected fruits
      $scope.selectedFruits = function selectedFruits() {
        return filterFilter($scope.fruits, {
          selected: true
        });
      };

      // watch fruits for changes
      $scope.$watch('fruits|filter:{selected:true}', function(nv) {
        self.matricula.personasConvive = nv.map(function(fruit) {
          return fruit.name;
        });
      }, true);
      $http.get('/api/ordenMatriculas/' + $stateParams.id).then(response => {
        this.matricula = response.data;
        socket.syncUpdates('ordenMatricula', this.matricula);
        this.matricula.fechaNacimiento = new Date(this.matricula.fechaNacimiento);
      });
      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('ordenMatricula');
      });
    }

    login(form) {
      this.submitted = true;
      var self = this;

      if (form.$valid) {
        this.$http.put('/api/ordenMatriculas/'+this.matricula._id, this.matricula).then(function cb(response) {
          console.log(response.data);
          alert("Orden actualizada con éxito!");
          self.$state.go('matricula.detalleMatricula',{ id: self.matricula._numOrden});
        }, function errcb(response) {
          console.log(response);
        });
      }
    }
  }

  angular.module('matriculasApp')
    .controller('EditarMatriculaCtrl', EditarMatriculaCtrl);

})();
