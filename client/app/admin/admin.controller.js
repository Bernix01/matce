'use strict';

(function() {

  class AdminController {
    constructor(Auth,$state) {
      console.log($state);
      this.$state = $state;
      // Use the User $resource to fetch all users
      this.getCurrentUser = Auth.getCurrentUser;

    }
  }

  angular.module('matriculasApp.admin')
    .controller('AdminController', AdminController);

})();
