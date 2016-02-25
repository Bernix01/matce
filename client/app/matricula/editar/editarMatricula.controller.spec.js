'use strict';

describe('Controller: EditarMatriculaCtrl', function () {

  // load the controller's module
  beforeEach(module('matriculasApp'));

  var EditarMatriculaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarMatriculaCtrl = $controller('EditarMatriculaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
