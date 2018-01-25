'use strict';
const router = require('express').Router();
const { FoodItem } = require('../db/models');
module.exports = router;


router.get('/', (req, res, next) => {
  FoodItem.findAll()
    .then(foodItems => res.json(foodItems))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  FoodItem.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(foodItem => res.json(foodItem))
    .catch(next);
});

router.post('/', (req, res, next) => {
  FoodItem.create(req.body)
    .then(foodItem => res.status(202).json(foodItem))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  FoodItem.findById(req.params.id)
    .then(foodItem => foodItem.update(req.body))
    .then(updated => res.status(202).json(updated))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  FoodItem.destroy({ where: { id: req.params.id } }).then(data => res.status(202).json(data));
});
