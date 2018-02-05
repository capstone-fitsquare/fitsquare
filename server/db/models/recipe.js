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
  },
  calories: {
    type: Sequelize.FLOAT
  },
  protein: {
    type: Sequelize.FLOAT
  },
  carbs: {
    type: Sequelize.FLOAT
  },
  fat: {
    type: Sequelize.FLOAT
  },
  numberOfServings: {
    type: Sequelize.INTEGER
  },
  ingredientLines: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalTimeInSeconds: {
    type: Sequelize.INTEGER
  },
  prepTimeInSeconds: {
    type: Sequelize.INTEGER
  },
  cookTimeInSeconds: {
    type: Sequelize.INTEGER
  },
})

module.exports = Recipe
