const router = require('express').Router();
const axios = require('axios');
const rp = require('request-promise')

module.exports = router;

const appId = '6c61f9d4';
const appKey = '92c44803e1c04b0d754c9754470e5c42';

router.get('/search/:searchTerms', (req, res, next) => {
  const searchTerms = req.params.searchTerms
  return axios
    .get(`http://api.yummly.com/v1/api/recipes?_app_id=${appId}&_app_key=${appKey}&${searchTerms}`)
    .then(res => res.data)
    .then(recipes => res.json(recipes))
    .catch(console.log);
})

router.get('/recipe-details/:recipeId', (req, res, next) => {
  const recipeId = req.params.recipeId;
  return axios
    .get(`http://api.yummly.com/v1/api/recipe/${recipeId}?_app_id=${appId}&_app_key=${appKey}`)
    .then(res => res.data)
    .then(details => res.json(details))
    .catch(console.log);
});

router.get('/test', (req, res, next) => {
  return axios
    .get(`http://api.yummly.com/v1/api/recipes?_app_id=${appId}&_app_key=${appKey}&q=onion+soup
    &facetField[]=diet`)
    .then(res => res.data)
    .then(list => res.json(list))
    .catch(console.log);
});
