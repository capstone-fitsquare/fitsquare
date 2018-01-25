/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Exercise = db.model('exercise')

describe('Exercise model', () => {

  beforeEach(() => {
    return db.sync({force: true})
    .then(() => {
      return Exercise.create({
        name: 'run',
      })
    })
  })

    it('contains name', () => {
      Exercise.findById(1)
      .then(exercise => {
        expect(exercise.name).to.exist
      })
      .catch(console.err)
    })

    describe('Validations', function () {
      let exercise;

      beforeEach(() => {
        exercise = Exercise.build()
      })

      it('errors without name', function () {
        return exercise.validate()
            .catch(err => {
                expect(err).to.exist
                expect(err.errors[0]).to.have.property('path', 'name')
            })
      })

    })

})
