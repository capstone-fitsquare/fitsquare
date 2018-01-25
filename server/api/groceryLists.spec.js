const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const GroceryList = db.model('groceryList');
const User = db.model('user');


const agent = request.agent(app);

describe('GroceryList routes', () => {
  before(() => {
    return db.sync({ force: true })
  })

  describe('/api/grocery-lists', () => {
    const name = 'main grocery list'


    beforeEach(() => {
      return GroceryList.create({
        name,
      })
    })

    it('GET /api/grocery-lists', () => {
      return request(app)
        .get('/api/grocery-lists')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body[0].name).to.be.equal(name);
        })
    })

    it('GET /api/grocery-lists/:id', () => {
      return request(app)
        .get('/api/grocery-lists/1')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.name).to.be.equal(name);
        })
    })

    it('POST /api/grocery-lists', () => {
			const body = {
				name,
			}
			return request(app)
	      .post('/api/grocery-lists')
	      .send(body)
	      .then(function(res) {
	        expect(res.body).to.be.an('object');
          expect(res.body.name).to.be.equal(name);
	      })
    })

    it('PUT /api/grocery-lists/:id', () => {
      return request(app)
        .put('/api/grocery-lists/1')
        .send({ name: 'new list name' })
        .then(function(res) {
          expect(res.statusCode).to.be.equal(202);
          return GroceryList.findById(1)
        })
        .then(res => {
          expect(res.name).to.be.equal('new list name');
        })
    })

    it('DELETE /api/grocery-lists/:id', () => {
      return request(app)
        .delete('/api/grocery-lists/1')
        .then(res => {
          expect(res.statusCode).to.be.equal(202);
          expect(res.body).to.be.equal(1);
        })
    })

  })

})
