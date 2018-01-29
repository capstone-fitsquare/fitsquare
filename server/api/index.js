const router = require('express').Router()
module.exports = router

router.use('/food-search', require('./foodSearch'))
router.use('/exercises', require('./exercises'))
router.use('/food-items', require('./foodItems'))
router.use('/grocery-lists', require('./groceryLists'))
router.use('/list-items', require('./listItems'))
router.use('/macro-goals', require('./macroGoals'))
router.use('/micro-goals', require('./microGoals'))
router.use('/users', require('./users'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
