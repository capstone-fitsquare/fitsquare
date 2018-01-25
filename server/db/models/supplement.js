const Sequelize = require('sequelize')
const db = require('../db')

const Supplement = db.define('supplement', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  unitOfMeasure: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

module.exports = Supplement
