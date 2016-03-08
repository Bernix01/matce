'use strict';

(function() {

  class EditarMatriculaCtrl {

    constructor($http, $state, $stateParams, socket, $scope, appConfig) {
      $scope.edit = true;
      $scope.nivelTitulo = appConfig.nivelTitulo;
      var self = this;
      this.matricula = {};
      this.errors = '';
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

    enviar(form) {
      this.submitted = true;
      if (!this.valid()) {
        return;
      }

      var self = this;

      if (form.$valid) {
        this.$http.put('/api/ordenMatriculas/' + this.matricula._id, this.matricula).then(function cb(response) {
          console.log(response.data);
          alert("Orden actualizada con éxito!");
          self.$state.go('matricula.detalleMatricula', {
            id: self.matricula._numOrden
          });
        }, function errcb(response) {
          console.log(response);
        });
      }
    }


    valid() {
      this.errors = '';
      var flag = true;
      if(this.matricula.fechaNacimiento.getFullYear() - (new Date()).getFullYear() >= 0){
        flag = false;
        this.errors = this.errors.concat('La matriculación de no nacidos y neonatos no está disponible por el momento.\n\n ');
      }
      if (this.matricula.nombres.split(' ').length != 2) {
        flag = false;
        this.errors = this.errors.concat('Nombre incompleto.\n\n ');
      }


      if (this.matricula.apellidos.split(' ').length != 2) {
        flag = false;
        this.errors = this.errors.concat('Apellido incompleto.\n\n ');
      }

      if (this.matricula.representante.split(' ').length != 4) {
        flag = false;
        this.errors = this.errors.concat('Nombre completo del representante es requerido.\n\n ');
      }


      if (this.matricula.representante.split(' ').length != 4) {
        flag = false;
        this.errors = this.errors.concat('Nombre completo del representante es requerido.\n\n ');
      }

      if (this.matricula.nivel === 0 || this.matricula.nivel === 1) {
        var today = new Date();
        var dif = today.getFullYear() - this.matricula.fechaNacimiento.getFullYear();
        if (dif === 3 || dif === 4) {
          if (this.matricula.fechaNacimiento.getMonth() > 4 && this.matricula.fechaNacimiento.getDay() > 2) {
            flag = false;
            this.errors = this.errors.concat('Edad no válida para el nivel solicitado.\n De acuerdo al Ministerio de educación para alplicar a Inicial 2 debe cumplirse que el estudiante cumpla los 3 o 4 años hasta el 2 de mayo del presente año.\n\n');
            console.log(this.errors);
          }
        } else {
          flag = false;
          this.errors = this.errors.concat('Edad no válida para el nivel solicitado.\n De acuerdo al Ministerio de educación para alplicar a Inicial 2 debe cumplirse que el estudiante cumpla los 3 o 4 años hasta el 2 de mayo del presente año.\n\n');
        }

      }
      return flag;
    }



  }

  angular.module('matriculasApp')
    .controller('EditarMatriculaCtrl', EditarMatriculaCtrl);

})();
