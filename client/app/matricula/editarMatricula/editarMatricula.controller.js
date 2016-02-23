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
        var tmp = response.data;
        tmp.fechaNacimiento = new Date(tmp.fechaNacimiento);
        var telf = {
          primary: tmp.telefonosRepresentante[0],
          alter: tmp.telefonosRepresentante.size === 2 ? tmp.telefonosRepresentante[1] : null
        }
        tmp.telefonosRepresentante = telf;
        this.matricula = tmp;
        console.log(this.matricula);
        socket.syncUpdates('matricula', this.matricula);
      });
    }

    login(form) {
      this.submitted = true;
      var self = this;

      if (form.$valid) {
        var tels = [
          this.matricula.telefonosRepresentante.primary
        ];
        if (this.matricula.telefonosRepresentante.alter) {
          tels.push(this.matricula.telefonosRepresentante.alter);
        }
        this.matricula.telefonosRepresentante = tels;
        console.log(this.matricula);
        this.$http.put('/api/ordenMatriculas/'+this.matricula._id, this.matricula).then(function cb(response) {
          alert("Orden actualizada con éxito!");
          self.$state.go('detalle',{ id: self.matricula._numOrden});
        }, function errcb(response) {
          console.log(response);
        });
      }
    }
  }

  angular.module('matriculasApp')
    .controller('EditarMatriculaCtrl', EditarMatriculaCtrl);

})();
