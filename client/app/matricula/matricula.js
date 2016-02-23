'use strict';

angular.module('matriculasApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('matricula', {
        data: {
                pageTitle: "Orden de matrícula"
            },
        url: '/matricula',
        templateUrl: 'app/matricula/matricula.html',
        controller: 'MatriculaCtrl',
        controllerAs: 'mat'
      });
  });
