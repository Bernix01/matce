'use strict';

describe('Directive: bsFormError', function () {

  // load the directive's module
  beforeEach(module('matriculasApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bs-form-error></bs-form-error>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bsFormError directive');
  }));
});
