/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const FoodItem = db.model('foodItem')

describe('FoodItem model', () => {

  beforeEach(() => {
    return db.sync({force: true})
    .then(() => {
      return FoodItem.create({
        name: 'tomato',
        servingSize: 20,
        servingUnit: 'g',
        calories: 10,
        protein: 0,
        carbs: 8,
        fat: 0
      })
    })
  })

    it('contains all necessary fields', () => {
      FoodItem.findById(1)
      .then(foodItem => {
        expect(foodItem.name).to.exist
        expect(foodItem.servingSize).to.exist
        expect(foodItem.servingUnit).to.exist
        expect(foodItem.calories).to.exist
        expect(foodItem.protein).to.exist
        expect(foodItem.carbs).to.exist
        expect(foodItem.fat).to.exist
      })
      .catch(console.err)
    })

    describe('Validations', function () {
      let foodItem;

      beforeEach(() => {
        foodItem = FoodItem.build()
      })

      it('errors when a required field is missing', function () {
        return foodItem.validate()
            .catch(err => {
                expect(err).to.exist
                expect(err.errors[0]).to.have.property('path', 'name')
                expect(err.errors[1]).to.have.property('path', 'servingSize')
                expect(err.errors[2]).to.have.property('path', 'servingUnit')
                expect(err.errors[3]).to.have.property('path', 'calories')
                expect(err.errors[4]).to.have.property('path', 'protein')
                expect(err.errors[5]).to.have.property('path', 'carbs')
                expect(err.errors[6]).to.have.property('path', 'fat')
            })
      })

    })

})
