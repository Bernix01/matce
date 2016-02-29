'use strict';

(function() {

  class CrearMatriculaCtrl {

    constructor($http, $state, $scope, appConfig) {
      $scope.nivelTitulo = appConfig.nivelTitulo;
      var self = this;
      this.matricula = {};
      this.errors = {};
      this.submitted = false;

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
    }

    enviar(form) {
      this.submitted = true;

      if (form.$valid) {
        this.$http.post('/api/ordenMatriculas', this.matricula).then(function cb(response) {
          this.matricula = response.data;
        }, function errcb(response) {
          console.log(response);
        });
        document.getElementById("form").reset();
      }
    }
  }

  angular.module('matriculasApp')
    .controller('CrearMatriculaCtrl', CrearMatriculaCtrl);

})();
