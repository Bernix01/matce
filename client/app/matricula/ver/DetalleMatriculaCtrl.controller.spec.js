'use strict';

describe('Controller: DetalleMatriculaCtrlCtrl', function() {

  // load the controller's module
  beforeEach(module('matriculasApp'));

  var DetalleMatriculaCtrlCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    DetalleMatriculaCtrlCtrl = $controller('DetalleMatriculaCtrlCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
