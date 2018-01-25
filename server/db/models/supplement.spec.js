/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Supplement = db.model('supplement')

describe('Supplement model', () => {

  beforeEach(() => {
    return db.sync({force: true})
    .then(() => {
      return Supplement.create({
        name: 'Creatine',
        quantity: 10,
        unitOfMeasure: 'mg'
      })
    })
  })

    it('contains all require fields', () => {
      Supplement.findById(1)
      .then(supplement => {
        expect(supplement.name).to.exist
        expect(supplement.quantity).to.exist
        expect(supplement.unitOfMeasure).to.exist
      })
      .catch(console.err)
    })

    describe('Validations', function () {
      let supplement;

      beforeEach(() => {
        supplement = Supplement.build()
      })

      it('errors when a required field is missing', function () {
        return supplement.validate()
            .catch(err => {
                expect(err).to.exist
                expect(err.errors[0]).to.have.property('path', 'name')
                expect(err.errors[1]).to.have.property('path', 'quantity')
                expect(err.errors[2]).to.have.property('path', 'unitOfMeasure')
            })
      })

    })

})
