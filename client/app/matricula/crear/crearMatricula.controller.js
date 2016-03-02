'use strict';

(function() {

    class CrearMatriculaCtrl {

      constructor($http, $state, $scope, appConfig) {
        $scope.nivelTitulo = appConfig.nivelTitulo;
        var self = this;
        this.matricula = {};
        this.errors = '';
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
        if (!this.valid) {
          return;
        }

        if (form.$valid) {
          this.$http.post('/api/ordenMatriculas', this.matricula).then(function cb(response) {
            this.matricula = response.data;
          }, function errcb(response) {
            console.log(response);
          });
          document.getElementById("form").reset();
        }
      }


      valid() {
        var flag = true;
        if (this.matricula.nombres.split(' ').length != 2) {
          flag = false;
          this.errors += 'Nombre incompleto.\n\n ';
        }


        if (this.matricula.apellidos.split(' ').length != 2) {
          flag = false;
          this.errors += 'Apellido incompleto.\n\n ';
        }

        if (this.matricula.representante.split(' ').length != 4) {
          flag = false;
          this.errors += 'Nombre completo del representante es requerido.\n\n ';
        }


        if (this.matricula.representante.split(' ').length != 4) {
          flag = false;
          this.errors += 'Nombre completo del representante es requerido.\n\n ';
        }

        if (this.matricula.nivel === (0 || 1)) {
          var today = new Date();
          if ((this.matricula.fechaNacimiento.getFullYear() - today.getFullYear()) === (3 || 4)) {
              //dos años
              if (this.matricula.fechaNacimiento.getMonth() > 4 && this.matricula.fechaNacimiento.getDay() > 2) {
                flag = false;
                this.errors += 'Edad no válida para el nivel solicitado.\n De acuerdo al Ministerio de educación para alplicar a Inicial 2 debe cumplirse que el estudiante cumpla los 3 o 4 años hasta el 2 de mayo del presente año.\n\n';
              }
            } else {
              flag = false;
              this.errors += 'Edad no válida para el nivel solicitado.\n De acuerdo al Ministerio de educación para alplicar a Inicial 2 debe cumplirse que el estudiante cumpla los 3 o 4 años hasta el 2 de mayo del presente año.\n\n';
            }

          }
          return flag;
        }
      }

      angular.module('matriculasApp')
        .controller('CrearMatriculaCtrl', CrearMatriculaCtrl);

    })();
