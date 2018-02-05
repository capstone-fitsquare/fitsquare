const db = require('../db')
const Exercise = require('./exercise')
const GroceryList = require('./groceryList')
const ListItem = require('./listItem')
const MacroGoal = require('./macroGoal')
const MicroGoal = require('./microGoal')
const Supplement = require('./supplement')
const User = require('./user')
const Recipe = require('./recipe')

Exercise.belongsTo(User)
User.hasMany(Exercise)

ListItem.belongsTo(GroceryList)
GroceryList.hasMany(ListItem)

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
  GroceryList,
  ListItem,
  MacroGoal,
  MicroGoal,
  Supplement,
  User,
  Recipe
}

