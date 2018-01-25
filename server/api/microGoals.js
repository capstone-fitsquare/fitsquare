'use strict';
const router = require('express').Router();
const { MicroGoal } = require('../db/models');
module.exports = router;


router.get('/', (req, res, next) => {
  MicroGoal.findAll()
  .then(microGoals => res.json(microGoals))
  .catch(next);
});

router.get('/:id', (req, res, next) => {
  MicroGoal.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(microGoal => res.json(microGoal))
    .catch(next);
});

router.post('/', (req, res, next) => {
  MicroGoal.create(req.body)
  .then(microGoal => res.status(202).json(microGoal))
  .catch(next);
});

router.put('/:id', (req, res, next) => {
  MicroGoal.findById(req.params.id)
  .then(microGoal => microGoal.update(req.body))
  .then(updated => res.status(202).json(updated))
  .catch(next);
});

router.delete('/:id', (req, res, next) => {
  MicroGoal.destroy({ where: { id: req.params.id } }).then(data => res.status(202).json(data));
});
