'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var OrdenMatriculaSchema = new mongoose.Schema({
  active: {type: Boolean, default: false},
  date: {
    type: Date,
    default: Date.now
  },
  _numOrden: String,
  nivel: Number,
  cedula: String,
  nombres: String,
  apellidos: String,
  fechaNacimiento: Date,
  sexo: String,
  lugarNacimiento: String,
  lugarDomicilio: String,
  personasConvive: [String],
  anteriorInstitucion: String,
  representante: String,
  representanteParentesco: String,
  representanteCI: String,
  telefonosRepresentante: [String],
  emailRepresentante: String,
  nombresPadre: String,
  apellidosPadre: String,
  nombresMadre: String,
  apellidosMadre: String,
  lugarTrabajoPadre: String,
  lugarTrabajoMadre: String,
  cargoPadre: String,
  cargoMadre: String,
  nivelPadre: Number,
  nivelMadre: Number,
  ciPadre: String,
  ciMadre: String
  //,  telefonosContacto: [String]
});

OrdenMatriculaSchema.virtual('nombreCompleto').get(function() {
  return this.nombres +" "+ this.apellidos;
});

OrdenMatriculaSchema.virtual('nombreCompleto.padre').get(function() {
  return this.nombresPadre +" "+ this.apellidosPadre;
});

OrdenMatriculaSchema.virtual('nombreCompleto.madre').get(function() {
  return this.nombresMadre +" "+ this.apellidosMadre;
});

OrdenMatriculaSchema.pre('save', function(next) {
  var self = this;
  self._numOrden = self.nombres.charAt(0)+self.apellidos.charAt(0)+self.nivel+self.date.getMilliseconds();

  next();
});

OrdenMatriculaSchema.set('toJSON', { getters: true });

export default mongoose.model('OrdenMatricula', OrdenMatriculaSchema);
