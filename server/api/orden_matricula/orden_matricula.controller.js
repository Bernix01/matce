/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/orden_matriculas              ->  index
 * POST    /api/orden_matriculas              ->  create
 * GET     /api/orden_matriculas/:id          ->  show
 * PUT     /api/orden_matriculas/:id          ->  update
 * DELETE  /api/orden_matriculas/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import OrdenMatricula from './orden_matricula.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of OrdenMatriculas
export function index(req, res) {
  OrdenMatricula.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single OrdenMatricula from the DB
export function show(req, res) {
  console.log(req.params.id);
  OrdenMatricula.findOne({ _numOrden: req.params.id })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new OrdenMatricula in the DB
export function create(req, res) {
  OrdenMatricula.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing OrdenMatricula in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  OrdenMatricula.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a OrdenMatricula from the DB
export function destroy(req, res) {
  OrdenMatricula.findOne({ _numOrden: req.params.id })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
