/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const GroceryList = db.model('groceryList')

describe('GroceryList model', () => {

  beforeEach(() => {
    return db.sync({force: true})
    .then(() => {
      return GroceryList.create({
        name: 'cutting',
      })
    })
  })

    it('contains name', () => {
      GroceryList.findById(1)
      .then(groceryList => {
        expect(groceryList.name).to.exist
      })
      .catch(console.err)
    })

    describe('Validations', function () {
      let groceryList;

      beforeEach(() => {
        groceryList = GroceryList.build()
      })

      it('errors without name', function () {
        return groceryList.validate()
            .catch(err => {
                expect(err).to.exist
                expect(err.errors[0]).to.have.property('path', 'name')
            })
      })

    })

})
