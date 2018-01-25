'use strict';
const router = require('express').Router();
const { GroceryList } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  GroceryList.findAll()
    .then(groceries => res.json(groceries))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  GroceryList.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(groceryList => res.json(groceryList))
    .catch(next);
});

router.post('/', (req, res, next) => {
  GroceryList.create(req.body)
    .then(groceryList => res.status(202).json(groceryList))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  GroceryList.findById(req.params.id)
    .then(groceryList => groceryList.update(req.body))
    .then(updated => res.status(202).json(updated))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  GroceryList.destroy({ where: { id: req.params.id } })
    .then(data => res.status(202).json(data))
    .catch(next);
});
