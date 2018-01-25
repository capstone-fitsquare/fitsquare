const Sequelize = require('sequelize')
const db = require('../db')

const MicroGoal = db.define('microGoal', {
  vitaminA: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  vitaminB_12: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  vitaminC: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  vitaminD_3: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  vitaminK: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  potassium: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  sodium: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  magnesium: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  zinc: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = MicroGoal
