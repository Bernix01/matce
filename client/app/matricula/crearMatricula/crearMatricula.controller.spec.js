'use strict';

describe('Controller: CrearMatriculaCtrl', function () {

  // load the controller's module
  beforeEach(module('matriculasApp'));

  var CrearMatriculaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrearMatriculaCtrl = $controller('CrearMatriculaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
