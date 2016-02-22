'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var ordenMatriculaCtrlStub = {
  index: 'ordenMatriculaCtrl.index',
  show: 'ordenMatriculaCtrl.show',
  create: 'ordenMatriculaCtrl.create',
  update: 'ordenMatriculaCtrl.update',
  destroy: 'ordenMatriculaCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var ordenMatriculaIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './orden_matricula.controller': ordenMatriculaCtrlStub
});

describe('OrdenMatricula API Router:', function() {

  it('should return an express router instance', function() {
    ordenMatriculaIndex.should.equal(routerStub);
  });

  describe('GET /api/orden_matriculas', function() {

    it('should route to ordenMatricula.controller.index', function() {
      routerStub.get
        .withArgs('/', 'ordenMatriculaCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/orden_matriculas/:id', function() {

    it('should route to ordenMatricula.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'ordenMatriculaCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/orden_matriculas', function() {

    it('should route to ordenMatricula.controller.create', function() {
      routerStub.post
        .withArgs('/', 'ordenMatriculaCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/orden_matriculas/:id', function() {

    it('should route to ordenMatricula.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'ordenMatriculaCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/orden_matriculas/:id', function() {

    it('should route to ordenMatricula.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'ordenMatriculaCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/orden_matriculas/:id', function() {

    it('should route to ordenMatricula.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'ordenMatriculaCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
