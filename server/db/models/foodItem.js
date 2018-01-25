const Sequelize = require('sequelize')
const db = require('../db')

const FoodItem = db.define('foodItem', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  servingSize: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  servingUnit: {
    type: Sequelize.STRING,
    allowNull: false
  },
  calories: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  protein: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  carbs: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  fat: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = FoodItem
