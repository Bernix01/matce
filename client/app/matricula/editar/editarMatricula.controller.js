'use strict';

(function() {

  class EditarMatriculaCtrl {

    constructor($http, $state, $stateParams, socket, $scope, appConfig) {
      $scope.edit = true;
      $scope.nivelTitulo = appConfig.nivelTitulo;
      $scope.provincias = appConfig.provincias;
      $scope.tiposSangre = appConfig.tiposSangre;
      $scope.mE = false;
      $scope.mC = false;
      $scope.mP = false;
      $scope.mR = false;
      var self = this;
      this.matricula = {};
      this.errors = '';
      this.submitted = false;
      this.$state = $state;
      this.$http = $http;
      this.$state = $state;
      this.date = Date.now();
      this.otrosConvive = "";
      this.$scope = $scope;
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
        if (this.otrosConvive != "") {
          this.matricula.personasConvive.push(this.otrosConvive);
        }
        this.capitalize();

        this.$http.put('/api/ordenMatriculas/' + this.matricula._id, this.matricula).then(function cb(response) {
          alert("Orden actualizada con éxito!");
          self.$state.go('matricula.detalleMatricula', {
            id: self.matricula._numOrden
          });
        }, function errcb(response) {
          console.log(response);
        });
      } else {
        this.errors = ":::";
      }
    }

    capitalize() {
      String.prototype.capitalize = function(lower) {
        return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function(a) {
          return a.toUpperCase();
        });
      };
      console.log(this.matricula.representanteEcon.capitalize(true));
      this.matricula.nombres = this.matricula.nombres.capitalize(true);
      this.matricula.apellidos = this.matricula.apellidos.capitalize(true);
      this.matricula.representante = this.matricula.representante.capitalize(true);
      this.matricula.nombresPadre = this.matricula.nombresPadre.capitalize(true);
      this.matricula.apellidosPadre = this.matricula.apellidosPadre.capitalize(true);
      this.matricula.nombresMadre = this.matricula.nombresMadre.capitalize(true);
      this.matricula.apellidosMadre = this.matricula.apellidosMadre.capitalize(true);
      this.matricula.representanteEcon = this.matricula.representanteEcon.capitalize(true);
    }

    valid() {
      this.errors = '';
      var flag = true;
      if (this.matricula.fechaNacimiento.getFullYear() - (new Date()).getFullYear() >= 0) {
        flag = false;
        this.errors = this.errors.concat('\nLa matriculación de no nacidos y neonatos no está disponible por el momento.');
      }
      if(!this.$scope.mE && this.matricula.ID.length != 10){
        flag = false;
        this.errors = this.errors.concat('\nCédula del estudiante no válida.');
      }
      if(!this.$scope.mR && this.matricula.representanteID.length != 10){
        flag = false;
        this.errors = this.errors.concat('\nCédula del estudiante no válida.');
      }
      if(!this.$scope.mP && this.matricula.idPadre.length != 10){
        flag = false;
        this.errors = this.errors.concat('\nCédula del padre no válida.');
      }
      console.log(this.matricula);
      console.log(this.matricula.representanteEconID.length);
      if(this.matricula.representanteEconID.length != 10 && this.matricula.representanteEconID.length != 13){
        flag = false;
        this.errors = this.errors.concat('\nIdentificación del representante económico no válida, ingrese R.U.C. o Cédula.');
      }
      if(!this.$scope.mC && this.matricula.idMadre.length != 10){
        flag = false;
        this.errors = this.errors.concat('\nCédula de la madre no válida.');
      }
      if (this.matricula.nombres.split(' ').length != 2) {
        flag = false;
        this.errors = this.errors.concat('\nNombre del estudiante incompleto, se requieren dos nombres.');
      }
      if (this.matricula.apellidos.split(' ').length != 2) {
        flag = false;
        this.errors = this.errors.concat('\nApellido del estudiante incompleto, se requieren dos apellidos.');
      }

      if (this.matricula.representante.split(' ').length < 2) {
        flag = false;
        this.errors = this.errors.concat('\nAl menos un nombre y un apellido del representante son requeridos.');
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
    .controller('EditarMatriculaCtrl', EditarMatriculaCtrl);

})();
