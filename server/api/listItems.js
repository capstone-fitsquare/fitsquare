'use strict';
const router = require('express').Router();
const { ListItem } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  ListItem.findAll()
    .then(listItems => res.json(listItems))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  ListItem.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(listItem => res.json(listItem))
    .catch(next);
});

router.post('/', (req, res, next) => {
  ListItem.create(req.body)
    .then(listItem => res.status(202).json(listItem))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  ListItem.findById(req.params.id)
    .then(listItem => listItem.update(req.body))
    .then(updated => res.status(202).json(updated))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  ListItem.destroy({ where: { id: req.params.id } })
    .then(data => res.status(202).json(data))
    .catch(next);
});
