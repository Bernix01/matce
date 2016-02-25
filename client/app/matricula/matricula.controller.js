'use strict';

(function() {

  class MatriculaCtrl {

    constructor($state) {
      this.$state = $state;
    }


  checkHome(){
    return this.$state.current.name === 'matricula';
  }
}
  angular.module('matriculasApp')
    .controller('MatriculaCtrl', MatriculaCtrl);

})();
