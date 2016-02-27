'use strict';

(function() {

  class AdminController {
    constructor(Auth,$state) {
      this.$state = $state;
      // Use the User $resource to fetch all users
      this.getCurrentUser = Auth.getCurrentUser;
      this.isAdmin = Auth.isAdmin;

    }
  }

  angular.module('matriculasApp.admin')
    .controller('AdminController', AdminController);

})();
