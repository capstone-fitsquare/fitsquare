const router = require('express').Router();
module.exports = router;

router.use('/usda-db', require('./usdaDB'));
router.use('/yummly', require('./yummlyApi'));
router.use('/exercises', require('./exercises'));
router.use('/grocery-lists', require('./groceryLists'));
router.use('/list-items', require('./listItems'));
router.use('/macro-goals', require('./macroGoals'));
router.use('/micro-goals', require('./microGoals'));
router.use('/users', require('./users'));
router.use('/recipes', require('./recipes'))

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
