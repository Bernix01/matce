/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import OrdenMatricula from '../api/orden_matricula/orden_matricula.model';

Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'administrador',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    }, {
      provider: 'local',
      role: 'secretaria',
      name: 'Secretaria',
      email: 'secretaria@example.com',
      password: 'secretaria'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

  OrdenMatricula.find({}).removeAsync().then(()=>{
    OrdenMatricula.createAsync({
      _numOrden: "JR12345",
      personasConvive: [
        "Padre",
        "Madre",
        "Tios/as"
      ],
      nombres: "Juan Antonio",
      apellidos: "Robalino Mancero",
      lugarNacimiento: "Durán",
      fechaNacimiento: new Date(),
      sexo: "M",
      lugarDomicilio: "Primavera 2",
      anteriorInstitucion: "Otro colegio",
      representante: "Andrés Juan",
      representanteParentesco: "Tio",
      representanteCI: "0956145821",
      telefonosRepresentanteP:
        "+593994349012",
        telefonosRepresentanteA:
        "+593224578163"
      ,
      nombresMadre: "Juliana Andrea",
      emailRepresentanteP: "representante@example.com",
      nombresPadre: "Andrés Juan",
      apellidosPadre: "Robalino Toral",
      lugarTrabajoPadre: "Empresa Inc.",
      ciPadre: "0956145821",
      cargoPadre: "Jefe de área",
      nivelPadre: 4,
      cargoMadre: "Jefa de área",
      nivelMadre: 4,
      ciMadre: "094563213",
      lugarTrabajoMadre: "Enterprise",
      apellidosMadre: "Mancero Reyes",
      nivel: 1,
      cedula: "0948124578"
    },
    {
      "nombres": "Alejandro Daniel",
      "apellidos": "Muñoz Rockefeller",
      "cedula": "0923763184",
      "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
      "lugarNacimiento": "Ernesto Maldonado",
      "sexo": "M",
      "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
      "nivel": 1,
      "anteriorInstitucion": "Mariscal Sucre",
      "representante": "Fabrizio David Anchundia Moreira",
      "representanteParentesco": "Padre",
      "representanteCI": "0931473755",
      "emailRepresentanteP": "fanchundpo@hotmail.clm",
      "nombresPadre": "Fabrizio David",
      "apellidosPadre": "Muñoz Ortega",
      "lugarTrabajoPadre": "Casa",
      "ciPadre": "0931473755",
      "cargoPadre": "Jefe",
      "nivelPadre": 3,
      "nombresMadre": "Angie Elizabeth",
      "apellidosMadre": "Rockefeller Ortega",
      "lugarTrabajoMadre": "Telegrafo",
      "ciMadre": "0912345677",
      "cargoMadre": "Jefa",
      "nivelMadre": 2,
      telefonosRepresentanteP:
        "+593994349012",
        telefonosRepresentanteA:
        "+593224578163"
      ,
      "personasConvive": [
          "Padre"
      ],
      "date": new Date("2016-02-22T20:14:04.893Z"),
      "active": false
  },
  {
    "nombres": "Alejandro Daniel",
    "apellidos": "Muñoz Rockefeller",
    "cedula": "0923763184",
    "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
    "lugarNacimiento": "Ernesto Maldonado",
    "sexo": "M",
    "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
    "nivel": 1,
    "anteriorInstitucion": "Mariscal Sucre",
    "representante": "Fabrizio David Anchundia Moreira",
    "representanteParentesco": "Padre",
    "representanteCI": "0931473755",
    "emailRepresentanteP": "fanchundpo@hotmail.clm",
    "nombresPadre": "Fabrizio David",
    "apellidosPadre": "Muñoz Ortega",
    "lugarTrabajoPadre": "Casa",
    "ciPadre": "0931473755",
    "cargoPadre": "Jefe",
    "nivelPadre": 3,
    "nombresMadre": "Angie Elizabeth",
    "apellidosMadre": "Rockefeller Ortega",
    "lugarTrabajoMadre": "Telegrafo",
    "ciMadre": "0912345677",
    "cargoMadre": "Jefa",
    "nivelMadre": 2,
    telefonosRepresentanteP:
      "+593994349012",
      telefonosRepresentanteA:
      "+593224578163"
    ,
    "personasConvive": [
        "Padre"
    ],
    "date": new Date("2016-02-22T20:14:04.893Z"),
    "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
},
{
  "nombres": "Alejandro Daniel",
  "apellidos": "Muñoz Rockefeller",
  "cedula": "0923763184",
  "fechaNacimiento": new Date("2000-02-10T05:00:00.000Z"),
  "lugarNacimiento": "Ernesto Maldonado",
  "sexo": "M",
  "lugarDomicilio": "Cdla. Los Alames Mz 218 V 17",
  "nivel": 1,
  "anteriorInstitucion": "Mariscal Sucre",
  "representante": "Fabrizio David Anchundia Moreira",
  "representanteParentesco": "Padre",
  "representanteCI": "0931473755",
  "emailRepresentanteP": "fanchundpo@hotmail.clm",
  "nombresPadre": "Fabrizio David",
  "apellidosPadre": "Muñoz Ortega",
  "lugarTrabajoPadre": "Casa",
  "ciPadre": "0931473755",
  "cargoPadre": "Jefe",
  "nivelPadre": 3,
  "nombresMadre": "Angie Elizabeth",
  "apellidosMadre": "Rockefeller Ortega",
  "lugarTrabajoMadre": "Telegrafo",
  "ciMadre": "0912345677",
  "cargoMadre": "Jefa",
  "nivelMadre": 2,
  telefonosRepresentanteP:
    "+593994349012",
    telefonosRepresentanteA:
    "+593224578163"
  ,
  "personasConvive": [
      "Padre"
  ],
  "date": new Date("2016-02-22T20:14:04.893Z"),
  "active": false
}).then(() => {
      console.log('finished populating ordenes de matricula');
    });
  });
