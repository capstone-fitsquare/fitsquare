const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const FoodItem = db.model('foodItem');
const User = db.model('user');


const agent = request.agent(app);

describe('FoodItem routes', () => {
  before(() => {
    return db.sync({ force: true })
  })

  describe('/api/food-items', () => {
    const name = 'tomato',
          servingSize = 20,
          servingUnit = 'g',
          calories = 10,
          protein = 0,
          carbs = 0,
          fat = 0


    beforeEach(() => {
      return FoodItem.create({
        name,
        servingSize,
        servingUnit,
        calories,
        protein,
        carbs,
        fat
      })
    })

    it('GET /api/food-items', () => {
      return request(app)
        .get('/api/food-items')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body[0].name).to.be.equal(name);
          expect(res.body[0].servingSize).to.be.equal(servingSize);
          expect(res.body[0].servingUnit).to.be.equal(servingUnit);
          expect(res.body[0].calories).to.be.equal(calories);
          expect(res.body[0].protein).to.be.equal(protein);
          expect(res.body[0].carbs).to.be.equal(carbs);
          expect(res.body[0].fat).to.be.equal(fat);
        })
    })

    it('GET /api/food-items/:id', () => {
      return request(app)
        .get('/api/food-items/1')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.name).to.be.equal(name);
          expect(res.body.servingSize).to.be.equal(servingSize);
          expect(res.body.servingUnit).to.be.equal(servingUnit);
          expect(res.body.calories).to.be.equal(calories);
          expect(res.body.protein).to.be.equal(protein);
          expect(res.body.carbs).to.be.equal(carbs);
          expect(res.body.fat).to.be.equal(fat);
        })
    })

    it('POST /api/food-items', () => {
			const body = {
				name,
        servingSize,
        servingUnit,
        calories,
        protein,
        carbs,
        fat
			}
			return request(app)
	      .post('/api/food-items')
	      .send(body)
	      .then(function(res) {
	        expect(res.body).to.be.an('object');
          expect(res.body.name).to.be.equal(name);
          expect(res.body.servingSize).to.be.equal(servingSize);
          expect(res.body.servingUnit).to.be.equal(servingUnit);
          expect(res.body.calories).to.be.equal(calories);
          expect(res.body.protein).to.be.equal(protein);
          expect(res.body.carbs).to.be.equal(carbs);
          expect(res.body.fat).to.be.equal(fat);
	      })
    })

    it('PUT /api/food-items/:id', () => {
      return request(app)
        .put('/api/food-items/1')
        .send({ name: 'new food name' })
        .then(function(res) {
          expect(res.statusCode).to.be.equal(202);
          return FoodItem.findById(1)
        })
        .then(res => {
          expect(res.name).to.be.equal('new food name');
        })
    })

    it('DELETE /api/food-items/:id', () => {
      return request(app)
        .delete('/api/food-items/1')
        .then(res => {
          expect(res.statusCode).to.be.equal(202);
          expect(res.body).to.be.equal(1);
        })
    })

  })

})
