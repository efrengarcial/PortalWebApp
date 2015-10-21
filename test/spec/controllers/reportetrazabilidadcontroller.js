'use strict';

describe('Controller: ReportetrazabilidadcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('portalWebApp'));

  var ReportetrazabilidadcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReportetrazabilidadcontrollerCtrl = $controller('ReportetrazabilidadcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReportetrazabilidadcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
