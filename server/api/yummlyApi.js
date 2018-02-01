const router = require('express').Router();
const axios = require('axios');
const Yummly = require('ws-yummly');

module.exports = router;

Yummly.config({
  app_id: '6c61f9d4',
  app_key: '92c44803e1c04b0d754c9754470e5c42',
});

// Yummly.getMeta('diet', 'raw')
//   .then(function(meta) {
//     console.log(meta);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

const appId = '6c61f9d4';
const appKey = '92c44803e1c04b0d754c9754470e5c42';

// router.get('/veggie-search/:searchTermOne/', (req, res, next) => {
//   Yummly.query(req.params.searchTermOne)
//     .get()
//     .then(function(resp) {
//       resp.forEach(function(recipe) {
//         res.json(recipe.name);
//       });
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });

router.get('/veggie-search/:searchTermOne', (req, res, next) => {
  const searchTermOne = req.params.searchTermOne;
  return axios
    .get(`http://api.yummly.com/v1/api/recipes?_app_id=${appId}&_app_key=${appKey}&q=${searchTermOne}`)
    .then(res => res.data)
    .then(list => res.json(list))
    .catch(console.log);
});

router.get('/exclude-food-search/:searchTermOne/:ingredientToExclude', (req, res, next) => {
  const searchTermOne = req.params.searchTermOne;
  const ingredientToExclude = req.params.ingredientToExclude;

  return axios
    .get(
      `http://api.yummly.com/v1/api/recipes?_app_id=${appId}&_app_key=${appKey}&q=${searchTermOne}&excludedIngredient[]=${searchTermOne}&excludedIngredient[]=${ingredientToExclude}`
    )
    .then(res => res.data)
    .then(list => res.json(list))
    .catch(console.log);
});
