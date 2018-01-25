'use strict';
const router = require('express').Router();
const { Exercise } = require('../db/models');
module.exports = router;


router.get('/', (req, res, next) => {
  Exercise.findAll()
  .then(exercises => res.json(exercises))
  .catch(next);
});

router.get('/:id', (req, res, next) => {
  Exercise.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(exercise => res.json(exercise))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Exercise.create(req.body)
  .then(exercise => res.status(202).json(exercise))
  .catch(next);
});

router.put('/:id', (req, res, next) => {
  Exercise.findById(req.params.id)
  .then(exercise => exercise.update(req.body))
  .then(updated => res.status(202).json(updated))
  .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Exercise.destroy({ where: { id: req.params.id } }).then(data => res.status(202).json(data));
});
