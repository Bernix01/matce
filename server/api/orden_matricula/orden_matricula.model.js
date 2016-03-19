'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
import config from '../../config/environment/shared';

var OrdenMatriculaSchema = new mongoose.Schema({
  active: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  _numOrden: String,
  nivel: Number,
  ID: String,
  nombres: String,
  tipoSangre: Number,
  apellidos: String,
  fechaNacimiento: Date,
  sexo: String,
  lugarNacimiento: String,
  lugarDomicilio: String,
  personasConvive: [String],
  anteriorInstitucion: String,
  representante: String,
  paralelo: String,
  provinciaNacimiento: Number,
  representanteParentesco: String,
  representanteID: String,
  telefonosRepresentanteP: String,
  telefonosRepresentanteA: String,
  emailRepresentanteP: String,
  emailRepresentanteA: String,
  nombresPadre: String,
  apellidosPadre: String,
  nombresMadre: String,
  apellidosMadre: String,
  lugarTrabajoPadre: String,
  lugarTrabajoMadre: String,
  cargoPadre: String,
  cargoMadre: String,
  contactoPadre: String,
  contactoMadre: String,
  idPadre: String,
  idMadre: String,
  emailRepresentanteEconP: String,
  telefonoRepresentanteEconP: String,
  representanteEconID: String,
  representanteEcon: String,
  representanteEconDir: String
    //,  telefonosContacto: [String]
});

OrdenMatriculaSchema.virtual('nombreCompleto').get(function() {
  return this.apellidos + " " + this.nombres;
});

OrdenMatriculaSchema.virtual('nombreCompletoPadre').get(function() {
  return this.apellidosPadre + " " + this.nombresPadre;
});

OrdenMatriculaSchema.virtual('nombreCompletoMadre').get(function() {
  return this.apellidosMadre + " " + this.nombresMadre;
});

OrdenMatriculaSchema.virtual('nivelAplica').get(function() {
  return config.nivelesDisponibles[this.nivel] || "nope";
});

OrdenMatriculaSchema.pre('save', function(next) {
  var self = this;
  if (self._numOrden == null) {
    self._numOrden = self.nombres.charAt(0) + self.apellidos.charAt(0) + self.nivel + self.date.getMilliseconds();
    self.active = false; //Siempre crear solicitud no cancelada!
  }

  next();
});

OrdenMatriculaSchema.set('toJSON', {
  getters: true
});
export default mongoose.model('OrdenMatricula', OrdenMatriculaSchema);
