const Sequelize = require('sequelize')
const db = require('../db')

const ListItem = db.define('listItem', {
  quantity: {
    type: Sequelize.INTEGER,
  }
})

module.exports = ListItem
