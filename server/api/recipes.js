'use strict';
const router = require('express').Router();
const { Recipe } = require('../db/models');
module.exports = router;


router.get('/', (req, res, next) => {
  Recipe.findAll()
  .then(recipes => res.json(recipes))
  .catch(next);
});

router.get('/:id', (req, res, next) => {
  Recipe.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(recipe => res.json(recipe))
    .catch(next);
});

router.post('/:yummlyId', (req, res, next) => {
  Recipe.findOrCreate({
    where: {
      yummlyId: req.params.yummlyId
    },
    defaults: req.body
  })
  .spread((recipe, created) => {
    if (created) res.status(202).json(recipe)
    else res.end()
  })
  .catch(next);
});

router.put('/:id', (req, res, next) => {
  Recipe.findById(req.params.id)
  .then(recipe => recipe.update(req.body))
  .then(updated => res.status(202).json(updated))
  .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Recipe.destroy({ where: { id: req.params.id } }).then(data => res.status(202).json(data));
});
