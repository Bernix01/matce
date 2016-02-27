'use strict';

import {Router} from 'express';
import * as controller from './orden_matricula.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', auth.hasRole('secretaria'), controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', auth.hasRole('secretaria'), controller.update);
router.patch('/:id', auth.hasRole('secretaria'), controller.update);
router.delete('/:id', auth.hasRole('secretaria'), controller.destroy);

module.exports = router;
