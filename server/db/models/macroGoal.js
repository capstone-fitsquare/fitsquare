const Sequelize = require('sequelize')
const db = require('../db')

const MacroGoal = db.define('macroGoal', {
  name: {
    type: Sequelize.STRING,
    defaultValue: 'Macro Goal'
  },
  calories: {
    type: Sequelize.INTEGER,
    defaultValue: 2000
  },
  protein: {
    type: Sequelize.INTEGER,
    // defaultValue: () => this.calories * .2
  },
  carbs: {
    type: Sequelize.INTEGER,
    // defaultValue: () => this.calories * .6
  },
  fat: {
    type: Sequelize.INTEGER,
    // defaultValue: () => this.calories * .2
  }
})

module.exports = MacroGoal
