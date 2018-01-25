const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const MacroGoal = db.model('macroGoal');
const User = db.model('user');


const agent = request.agent(app);

describe('MacroGoal routes', () => {
  before(() => {
    return db.sync({ force: true })
  })

  describe('/api/macro-goals', () => {
    const name = 'cutting',
          calories = 2000,
          protein = 100,
          carbs = 200,
          fat = 80


    beforeEach(() => {
      return MacroGoal.create({
        name,
        calories,
        protein,
        carbs,
        fat
      })
    })

    it('GET /api/macro-goals', () => {
      return request(app)
        .get('/api/macro-goals')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body[0].name).to.be.equal(name);
          expect(res.body[0].calories).to.be.equal(calories);
          expect(res.body[0].protein).to.be.equal(protein);
          expect(res.body[0].carbs).to.be.equal(carbs);
          expect(res.body[0].fat).to.be.equal(fat);
        })
    })

    it('GET /api/macro-goals/:id', () => {
      return request(app)
        .get('/api/macro-goals/1')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.calories).to.be.equal(calories);
          expect(res.body.protein).to.be.equal(protein);
          expect(res.body.carbs).to.be.equal(carbs);
          expect(res.body.fat).to.be.equal(fat);
        })
    })

    it('POST /api/macro-goals', () => {
			const body = {
				name,
        calories,
        protein,
        carbs,
        fat
			}
			return request(app)
	      .post('/api/macro-goals')
	      .send(body)
	      .then(function(res) {
	        expect(res.body).to.be.an('object');
          expect(res.body.name).to.be.equal(name);
          expect(res.body.calories).to.be.equal(calories);
          expect(res.body.protein).to.be.equal(protein);
          expect(res.body.carbs).to.be.equal(carbs);
          expect(res.body.fat).to.be.equal(fat);
	      })
    })

    it('PUT /api/macro-goals/:id', () => {
      return request(app)
        .put('/api/macro-goals/1')
        .send({ name: 'new goal name' })
        .then(function(res) {
          expect(res.statusCode).to.be.equal(202);
          return MacroGoal.findById(1)
        })
        .then(res => {
          expect(res.name).to.be.equal('new goal name');
        })
    })

    it('DELETE /api/macro-goals/:id', () => {
      return request(app)
        .delete('/api/macro-goals/1')
        .then(res => {
          expect(res.statusCode).to.be.equal(202);
          expect(res.body).to.be.equal(1);
        })
    })

  })

})
