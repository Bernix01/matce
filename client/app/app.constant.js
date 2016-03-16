(function(angular, undefined) {
'use strict';

angular.module('matriculasApp.constants', [])

.constant('appConfig', {userRoles:['usuario','secretaria','administrador'],nivelTitulo:['Primer nivel','Segundo nivel','Tercer nivel','Cuarto nivel'],nivelesDisponibles:['Inicial 2(3 años)','Inicial 2(4 años)','Primero de básica','Segundo de básica','Tercero de básica','Cuarto de básica','Quinto de básica','Sexto de básica','Séptimo de básica'],tiposSangre:['O negativo','O positivo','A negativo','A positivo','B negativo','B positivo','AB negativo','AB positivo'],provincias:['Azuay','Bolivar','Cañar','Carchi','Imbabura','Cotopaxi','Chimborazo','El Oro','Esmeraldas','Galapagos','Guayas','Loja','Los rios','Manabi','Morona Santiago','Napo','Orellana','Pastaza','Pichincha','Santa Elena','Santo Domigo de los Tsachilas','Sucumbios','Tungurahua','Zamora Chinchipe']})

;
})(angular);