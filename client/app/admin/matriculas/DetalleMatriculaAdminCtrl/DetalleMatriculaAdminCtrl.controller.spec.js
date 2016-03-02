'use strict';

describe('Controller: DetalleMatriculaAdminCtrlCtrl', function () {

  // load the controller's module
  beforeEach(module('matriculasApp'));

  var DetalleMatriculaAdminCtrlCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetalleMatriculaAdminCtrlCtrl = $controller('DetalleMatriculaAdminCtrlCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
