const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/food-items', require('./foodItems'))
router.use('/grocery-lists', require('./groceryLists'))
router.use('/macro-goals', require('./macroGoals'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
