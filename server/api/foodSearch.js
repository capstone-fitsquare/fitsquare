const router = require('express').Router();
const request = require('request')
const axios = require('axios')
const rp = require('request-promise')
module.exports = router;

// apiKey to secrets.js

router.get('/:searchTerms', (req, res, next) => {

  rp({
    uri: 'https://api.nal.usda.gov/ndb/search/',
    qs: {
      format: 'json',
      q: req.params.searchTerms,
      max: 10,
      api_key: 'fpaqbYlDBH1V8Y0hkSYgpUaR6x11ISzNbRsGjvFB'
    },
    json: true
  })
    .then((data) => {
      console.log('backend data', data)
      res.json(data)

    })
    .catch((err) => {
      console.log(err)
      res.end()
    })

})
