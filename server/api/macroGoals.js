'use strict';
const router = require('express').Router();
const { MacroGoal } = require('../db/models');
module.exports = router;


router.get('/', (req, res, next) => {
  MacroGoal.findAll()
  .then(macroGoals => res.json(macroGoals))
  .catch(next);
});

router.get('/:id', (req, res, next) => {
  MacroGoal.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(macroGoal => res.json(macroGoal))
    .catch(next);
});

router.post('/', (req, res, next) => {
  MacroGoal.create(req.body)
  .then(macroGoal => res.status(202).json(macroGoal))
  .catch(next);
});

router.put('/:id', (req, res, next) => {
  MacroGoal.findById(req.params.id)
  .then(macroGoal => macroGoal.update(req.body))
  .then(updated => res.status(202).json(updated))
  .catch(next);
});

router.delete('/:id', (req, res, next) => {
  MacroGoal.destroy({ where: { id: req.params.id } }).then(data => res.status(202).json(data));
});
