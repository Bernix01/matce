'use strict';

describe('Controller: MatriculasCtrl', function () {

  // load the controller's module
  beforeEach(module('matriculasApp'));

  var MatriculasCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MatriculasCtrl = $controller('MatriculasCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
