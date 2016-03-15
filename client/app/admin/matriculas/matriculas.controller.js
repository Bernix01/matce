'use strict';

(function() {

    class MatriculasCtrl {
      constructor($http, socket, appConfig, $scope, $uibModal) {
        this.$http = $http;
        var self = this;
        $scope.date = new Date();
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
        $scope.activeFilter = function(input) {
          return input.active;
        }
        $scope.toggleOpts = false;
        $scope.currentPage = 1;
        $scope.entryLimit = 9;
        $scope.noOfPages = 5;
        $scope.printOpts = {
          nivelAplica: true,
          ID: true,
          fechaNacimiento: false,
          sexo: false,
          anteriorInstitucion: false,
          tipoSangre: false,
          representante: true,
          idRepresentante: true,
          telsRepresentante: true,
          emailRepresentante: true,
          estado: true
        }

        $scope.open = function(matricula) {
          var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'app/admin/matriculas/detalle.html',
            controller: 'DetalleMatriculaAdminCtrl',
            resolve: {
              matricula: function() {
                return matricula;
              }
            }
          });
        }
      }

        deleteMatricula(matricula) {
          var self = this;
          if (confirm('Seguro que desea borrar la orden de mátricula?')) {
            this.$http.delete('/api/ordenMatriculas/' + matricula._numOrden).then(response => {
              alert('Orden eliminada con éxito.');
              this.matriculas.splice(this.matriculas.indexOf(matricula), 1);
              socket.unsyncUpdates('ordenMatricula');
            });
          }
        }

        excelExport() {
          console.log('exporting...');
          var tableInfo = Array.prototype.map.call(document.querySelectorAll('.table .table-row'), function(tr) {
            return Array.prototype.map.call(tr.querySelectorAll('.table-cell'), function(td) {
              return td.textContent;
            });
          });
          var blob = new Blob([data], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
          });
          console.log(blob);
          saveAs(blob, 'test.xlsx');
        }
      }

      angular.module('matriculasApp.admin')
        .controller('MatriculasCtrl', MatriculasCtrl);

    })();
