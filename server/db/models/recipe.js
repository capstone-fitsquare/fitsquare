const Sequelize = require('sequelize')
const db = require('../db')

const Recipe = db.define('recipe', {
  yummlyId: {
    type: Sequelize.STRING
  },
  recipeName: {
    type: Sequelize.STRING
  },
  smallImageUrls: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  meal: {
    type: Sequelize.STRING
  },
  rating: {
    type: Sequelize.INTEGER
  },
  ingredients: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Recipe
