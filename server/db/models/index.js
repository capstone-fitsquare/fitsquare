const db = require('../db')
const Exercise = require('./exercise')
const FoodItem = require('./foodItem')
const GroceryList = require('./groceryList')
const MacroGoal = require('./macroGoal')
const MicroGoal = require('./microGoal')
const Supplement = require('./supplement')
const User = require('./user')

Exercise.belongsTo(User)
User.hasMany(Exercise)

FoodItem.belongsTo(GroceryList)
GroceryList.hasMany(FoodItem)

GroceryList.belongsTo(User)
User.hasMany(GroceryList)

MacroGoal.belongsTo(User)
User.hasMany(MacroGoal)

MicroGoal.belongsTo(User)
User.hasMany(MicroGoal)

Supplement.belongsTo(User)
User.hasMany(Supplement)

module.exports = {
  db,
  Exercise,
  FoodItem,
  GroceryList,
  MacroGoal,
  MicroGoal,
  Supplement,
  User
}
