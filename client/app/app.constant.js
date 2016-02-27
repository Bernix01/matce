(function(angular, undefined) {
'use strict';

angular.module('matriculasApp.constants', [])

.constant('appConfig', {userRoles:['usuario','secretaria','administrador'],nivelTitulo:['Primer nivel','Segundo nivel','Tercer nivel','Cuarto nivel'],nivelesDisponibles:['Primero de básica','Segundo de básica','Tercero de básica','Cuarto de básica','Quinto de básica','Sexto de básica','Séptimo de básica']})

;
})(angular);