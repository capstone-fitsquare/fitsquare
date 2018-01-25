/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const MacroGoal = db.model('macroGoal')

describe('MacroGoal model', () => {

  beforeEach(() => {
    return db.sync({force: true})
    .then(() => {
      return MacroGoal.create({
        name: 'cutting',
        calories: 2000,
        protein: 100,
        carbs: 200,
        fat: 80,
      })
    })
  })

    it('contains all necessary fields', () => {
      MacroGoal.findById(1)
      .then(MacroGoal => {
        expect(MacroGoal.name).to.exist
        expect(MacroGoal.calories).to.exist
        expect(MacroGoal.protein).to.exist
        expect(MacroGoal.carbs).to.exist
        expect(MacroGoal.fat).to.exist
      })
      .catch(console.err)
    })

    describe('Validations', function () {
      let macroGoal;

      beforeEach(() => {
        macroGoal = MacroGoal.build()
      })

      it('errors when a required field is missing', function () {
        return macroGoal.validate()
            .catch(err => {
                expect(err).to.exist
                expect(err.errors[1]).to.have.property('path', 'calories')
                expect(err.errors[2]).to.have.property('path', 'protein')
                expect(err.errors[3]).to.have.property('path', 'carbs')
                expect(err.errors[4]).to.have.property('path', 'fat')
            })
      })

    })

})
