'use strict';
const router = require('express').Router();
const axios = require('axios')
module.exports = router;

router.get('/:searchTerms', (req, res, next) => {

  const apiKey = 'fpaqbYlDBH1V8Y0hkSYgpUaR6x11ISzNbRsGjvFB'
  axios.get(`https://api.nal.usda.gov/ndb/search/?format=json&q=butter&max=25&offset=0&api_key=${apiKey}`)
  .then(res => res.data)
  .then(data => console.log('data!!!', data))
})
