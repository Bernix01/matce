'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Inicio',
    'state': 'main'
  },{
    'title': 'Matriculas',
    'state': 'matricula'
  },{
    'title': 'Contacto',
    'state': 'contacto'
  }];
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.hasRole('secretaria');
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('matriculasApp')
  .controller('NavbarController', NavbarController);
