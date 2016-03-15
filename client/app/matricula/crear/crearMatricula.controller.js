'use strict';

(function() {

  class CrearMatriculaCtrl {

    constructor($http, $state, $scope, appConfig) {
      $scope.nivelTitulo = appConfig.nivelTitulo;
      $scope.tiposSangre = appConfig.tiposSangre;
      var self = this;
      this.matricula = {};
      this.errors = '';
      this.submitted = false;
      this.$http = $http;
      this.$state = $state;
      this.date = Date.now();
      this.otrosConvive = "";
      var options = {
        content: ":v", // text of the snackbar
        style: "", // add a custom class to your snackbar
        timeout: 10000, // time in milliseconds after the snackbar autohides, 0 is disabled
        htmlAllowed: true, // allows HTML as content value
        onClose: function() {} // callback called when the snackbar gets closed.
      }
      angular.element.snackbar(options);
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
      var _self = this;
      if (!this.valid) {
        return;
      }

      if (form.$valid) {
        if (this.otrosConvive != "") {
          this.matricula.personasConvive.push(this.otrosConvive);
        }
        this.$http.post('/api/ordenMatriculas', this.matricula).then(function cb(response) {
          _self.$state.go('matricula.detalleMatricula', {
            id: response.data._numOrden
          });
        }, function errcb(response) {
          console.log(response);
        });
        document.getElementById("form").reset();
      }
    }


    valid() {
      this.errors = '';
      var flag = true;
      if (this.matricula.fechaNacimiento.getFullYear() - (new Date()).getFullYear() >= 0) {
        flag = false;
        this.errors = this.errors.concat('\nLa matriculación de no nacidos y neonatos no está disponible por el momento.');
      }
      if (this.matricula.nombres.split(' ').length != 2) {
        flag = false;
        this.errors = this.errors.concat('\nNombre del estudiante incompleto, se requieren dos nombres.');
      }

      if (this.representanteEconID.length != 10 || this.representanteEconID.length != 10) {
        this.errors = this.errors.concat('\nCédula o RUC ingresado no válido.');
        flag = false;
      }

      if (this.matricula.apellidos.split(' ').length != 2) {
        flag = false;
        this.errors = this.errors.concat('\nApellido del estudiante incompleto, se requieren dos apellidos.');
      }

      if (this.matricula.representante.split(' ').length < 2) {
        flag = false;
        this.errors = this.errors.concat('\nNombre completo del representante es requerido.');
      }

      if (this.matricula.nivel === 0 || this.matricula.nivel === 1) {
        var today = new Date();
        var dif = today.getFullYear() - this.matricula.fechaNacimiento.getFullYear();
        if (dif === 3 || dif === 4) {
          if (this.matricula.fechaNacimiento.getMonth() > 4 && this.matricula.fechaNacimiento.getDay() > 2) {
            flag = false;
            this.errors = this.errors.concat('\nEdad no válida para el nivel solicitado.\n De acuerdo al Ministerio de educación para alplicar a Inicial 2 debe cumplirse que el estudiante cumpla los 3 o 4 años hasta el 2 de mayo del presente año.');
            console.log(this.errors);
          }
        } else {
          flag = false;
          this.errors = this.errors.concat('\nEdad no válida para el nivel solicitado.\n De acuerdo al Ministerio de educación para alplicar a Inicial 2 debe cumplirse que el estudiante cumpla los 3 o 4 años hasta el 2 de mayo del presente año.');
        }

      }
      return flag;
    }
  }

  angular.module('matriculasApp')
    .controller('CrearMatriculaCtrl', CrearMatriculaCtrl);

})();
