'use strict';
const router = require('express').Router();
const request = require('request')
module.exports = router;

router.get('/:searchTerms', (req, res, next) => {
  request({
    uri: 'https://api.nal.usda.gov/ndb/search/',
    qs: {
      api_key: 'fpaqbYlDBH1V8Y0hkSYgpUaR6x11ISzNbRsGjvFB',
      q: req.params.searchTerms,
      max: 10,
    }
  }, (err, res, body) => {
    if (err) {
      console.log('Error: ', err)
    } else {
      // const info = JSON.parse(body);
      console.log('body: ', body);
    }
  })
})
