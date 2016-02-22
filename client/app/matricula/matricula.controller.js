'use strict';

(function() {

  class MatriculaCtrl {

    constructor($http, $state, $scope) {
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

      $scope.values = [
        "Primer nivel",
        "Segundo nivel",
        "Tercer nivel",
        "Cuarto nivel"
      ];
      $scope.values2 = [
        "Primer nivel",
        "Segundo nivel",
        "Tercer nivel",
        "Cuarto nivel"
      ];

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
        // this.matricula = {
        //   "personasConvive": [
        //     "Padre",
        //     "Madre",
        //     "Tios/as"
        //   ],
        //   "nombres": "Guillermo Enrique",
        //   "apellidos": "Guillermo Enrique",
        //   "lugarNacimiento": "Guillermo Enrique",
        //   "fechaNacimiento": new Date(),
        //   "sexo": "M",
        //   "lugarDomicilio": "fgdgfd",
        //   "anteriorInstitucion": "Guillermo Enrique",
        //   "representante": "Guillermo Enrique",
        //   "representanteParentesco": "Guillermo Enrique",
        //   "representanteCI": "Guillermo Enrique",
        //   "telefonosRepresentante": {
        //     "primary": "+593992345044",
        //     "alter": "234234"
        //   },
        //   "nombresMadre": "fgdgfd",
        //   "emailRepresentante": "Guillermo@sdfsdf",
        //   "nombresPadre": "sdfsdf",
        //   "apellidosPadre": "sdfsdf",
        //   "lugarTrabajoPadre": "sdfsdf",
        //   "ciPadre": "sdfsdf",
        //   "cargoPadre": "sdfsdf",
        //   "nivelPadre": 1,
        //   "cargoMadre": "sdfsdf",
        //   "nivelMadre": 2,
        //   "ciMadre": "sdfsdf",
        //   "lugarTrabajoMadre": "sdfsdf",
        //   "apellidosMadre": "sdfsdf",
        //   "nivel": 1,
        //   "cedula": "654654654"
        // };
    }

    login(form) {
      this.submitted = true;

      if (form.$valid) {
        var tels = [
          this.matricula.telefonosRepresentante.primary
        ];
        if (this.matricula.telefonosRepresentante.alter) {
          tels.push(this.matricula.telefonosRepresentante.alter);
        }
        this.matricula.telefonosRepresentante = tels;
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
    .controller('MatriculaCtrl', MatriculaCtrl);

})();
