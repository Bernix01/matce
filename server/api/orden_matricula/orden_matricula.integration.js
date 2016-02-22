'use strict';

var app = require('../..');
import request from 'supertest';

var newOrdenMatricula;

describe('OrdenMatricula API:', function() {

  describe('GET /api/orden_matriculas', function() {
    var ordenMatriculas;

    beforeEach(function(done) {
      request(app)
        .get('/api/orden_matriculas')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          ordenMatriculas = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      ordenMatriculas.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/orden_matriculas', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/orden_matriculas')
        .send({
          name: 'New OrdenMatricula',
          info: 'This is the brand new ordenMatricula!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newOrdenMatricula = res.body;
          done();
        });
    });

    it('should respond with the newly created ordenMatricula', function() {
      newOrdenMatricula.name.should.equal('New OrdenMatricula');
      newOrdenMatricula.info.should.equal('This is the brand new ordenMatricula!!!');
    });

  });

  describe('GET /api/orden_matriculas/:id', function() {
    var ordenMatricula;

    beforeEach(function(done) {
      request(app)
        .get('/api/orden_matriculas/' + newOrdenMatricula._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          ordenMatricula = res.body;
          done();
        });
    });

    afterEach(function() {
      ordenMatricula = {};
    });

    it('should respond with the requested ordenMatricula', function() {
      ordenMatricula.name.should.equal('New OrdenMatricula');
      ordenMatricula.info.should.equal('This is the brand new ordenMatricula!!!');
    });

  });

  describe('PUT /api/orden_matriculas/:id', function() {
    var updatedOrdenMatricula;

    beforeEach(function(done) {
      request(app)
        .put('/api/orden_matriculas/' + newOrdenMatricula._id)
        .send({
          name: 'Updated OrdenMatricula',
          info: 'This is the updated ordenMatricula!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedOrdenMatricula = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedOrdenMatricula = {};
    });

    it('should respond with the updated ordenMatricula', function() {
      updatedOrdenMatricula.name.should.equal('Updated OrdenMatricula');
      updatedOrdenMatricula.info.should.equal('This is the updated ordenMatricula!!!');
    });

  });

  describe('DELETE /api/orden_matriculas/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/orden_matriculas/' + newOrdenMatricula._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when ordenMatricula does not exist', function(done) {
      request(app)
        .delete('/api/orden_matriculas/' + newOrdenMatricula._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
