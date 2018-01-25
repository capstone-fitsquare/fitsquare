/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const MicroGoal = db.model('microGoal')

describe('MicroGoal model', () => {

  beforeEach(() => {
    return db.sync({force: true})
    .then(() => {
      return MicroGoal.create({
        vitaminA: 100,
        vitaminB_12: 100,
        vitaminC: 100,
        vitaminD_3: 100,
        vitaminK: 100,
        potassium: 100,
        sodium: 100,
        magnesium: 100,
        zinc: 100
      })
    })
  })

    it('contains all necessary fields', () => {
      MicroGoal.findById(1)
      .then(MicroGoal => {
        expect(MicroGoal.vitaminA).to.exist
        expect(MicroGoal.vitaminB_12).to.exist
        expect(MicroGoal.vitaminC).to.exist
        expect(MicroGoal.vitaminD_3).to.exist
        expect(MicroGoal.vitaminK).to.exist
        expect(MicroGoal.potassium).to.exist
        expect(MicroGoal.sodium).to.exist
        expect(MicroGoal.magnesium).to.exist
        expect(MicroGoal.zinc).to.exist
      })
      .catch(console.err)
    })

    describe('Validations', function () {
      let microGoal;

      beforeEach(() => {
        microGoal = MicroGoal.build()
      })

      it('errors when a required field is missing', function () {
        return microGoal.validate()
            .catch(err => {
                expect(err).to.exist
                expect(err.errors[0]).to.have.property('path', 'vitaminA')
                expect(err.errors[1]).to.have.property('path', 'vitaminB_12')
                expect(err.errors[2]).to.have.property('path', 'vitaminC')
                expect(err.errors[3]).to.have.property('path', 'vitaminD_3')
                expect(err.errors[4]).to.have.property('path', 'vitaminK')
                expect(err.errors[5]).to.have.property('path', 'potassium')
                expect(err.errors[6]).to.have.property('path', 'sodium')
                expect(err.errors[7]).to.have.property('path', 'magnesium')
                expect(err.errors[8]).to.have.property('path', 'zinc')

            })
      })

    })

})
