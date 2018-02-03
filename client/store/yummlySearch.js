import axios from 'axios'
import history from '../history'
import { addFoodToGroceryList, addFoodToDayN } from './index'

/**
 * ACTION TYPES
 */
export const GET_YUMMLY_SEARCH_MATCHES = 'GET_YUMMLY_SEARCH_MATCHES'
export const GET_YUMMLY_RECIPE_DETAILS = 'GET_YUMMLY_RECIPE_DETAILS'

/**
 * ACTION CREATORS
 */
export const getYummlySearchMatches = recipeMatches => ({type: GET_YUMMLY_SEARCH_MATCHES, recipeMatches})
export const getYummlyRecipeDetails = recipeDetails => ({type: GET_YUMMLY_RECIPE_DETAILS, recipeDetails})

/**
 * THUNK CREATORS
 */
export const fetchYummlySearchMatches = (searchParameters) => {
  const searchTerms = stringifyQuery(searchParameters)
  return dispatch =>
    axios.get(`/api/yummly/search/${searchTerms}`)
      .then(res => res.data)
      .then(matches => {
        console.log('matches: ', matches)
        const action = getYummlySearchMatches(matches);
        dispatch(action);
      })
      .catch(err => console.log(err))
}


export const fetchYummlyRecipeDetails = (recipeId) =>
  dispatch =>
    axios.get(`/api/yummly/recipe-details/${recipeId}`)
      .then(res => res.data)
      .then(details => {
        console.log('details: ', details)
        const action = getYummlyRecipeDetails(details)
        dispatch(action)
      })
      .catch(err => console.log(err))


/**
 * REDUCER
 */

const initialState = {
  recipeMatches: [],
  recipeDetails: {}
}

export default function (state = initialState, action) {
  switch (action.type) {

    case GET_YUMMLY_SEARCH_MATCHES:
      return {
      ...state,
      recipeMatches: action.recipeMatches }

    case GET_YUMMLY_RECIPE_DETAILS:
      return {
        ...state,
        recipeDetails: action.recipeDetails }

    default:
      return state
  }
}

const generateSearchValue = (category, givenName) => {
  let dataArr;
  switch (category) {
    case 'allergies': dataArr = allergies
    case 'cuisines': dataArr = cuisines
    case 'courses': dataArr = courses
    case 'diets': dataArr = diets
  }
  return dataArr.find(x => x.name === givenName).searchValue
}

const example = {
  q: 'onion soup',
  requirePictures: true,
  allowedAllergy: ['Egg-Free', 'Gluten-Free'],
  allowedCourse: ['Main Dishes'],
  allowedCuisine: ['American', 'Chinese'],
  allowedDiet: ['Lacto vegetarian', 'Ovo vegetarian'],
  maxTotalTimeInSeconds: 5400,
  calories: { min: null, max: 1000 }, // nutrition.ENERC_KCAL.max: 1000
  protein: { min: 100, max: null },  // nutrition.PROCNT.min: 100
  carbs: { min: null, max: 10 },  // nutrition.CHOCDF.max: 10
  fat: { min: null, max: 10 }  // nutrition.FAT.max: 10
}

const stringifyQuery = (searchParameters) => {
  let params = []
  let {
    q, requirePictures,
    allowedAllergy, allowedCuisine, allowedCourse, allowedDiet,
    maxTotalTimeInSeconds,
    calories, protein, carbs, fat } = searchParameters

  if (q) params.push(`q=${q.split(' ').join('+')}`)
  if (requirePictures) params.push('requirePictures=true')

  if (allowedAllergy.length) allowedAllergy.forEach(allergy => params.push(`allowedAllergy[]=${generateSearchValue('allergies', allergy)}`))
  if (allowedCourse.length) allowedCourse.forEach(course => params.push(`allowedCourse[]=${generateSearchValue('courses', course)}`))
  if (allowedCuisine.length) allowedCuisine.forEach(cuisine => params.push(`allowedCuisine[]=${generateSearchValue('cuisines', cuisine)}`))
  if (allowedDiet.length) allowedDiet.forEach(diet => params.push(`allowedDiet[]=${generateSearchValue('diets', diet)}`))

  if (maxTotalTimeInSeconds) params.push(`maxTotalTimeInSeconds=${maxTotalTimeInSeconds}`)

  if (calories.min) params.push(`nutrition.ENERC_KCAL.min=${calories.min}`)
  if (calories.max) params.push(`nutrition.ENERC_KCAL.max=${calories.max}`)

  if (protein.min) params.push(`nutrition.PROCNT.min=${protein.min}`)
  if (protein.max) params.push(`nutrition.PROCNT.max=${protein.max}`)

  if (carbs.min) params.push(`nutrition.CHOCDF.min=${carbs.min}`)
  if (carbs.max) params.push(`nutrition.CHOCDF.max=${carbs.max}`)

  if (fat.min) params.push(`nutrition.FAT.min=${fat.min}`)
  if (fat.max) params.push(`nutrition.FAT.max=${fat.max}`)

  console.log('params array: ', params)
  params.join('&')
  console.log('final params: ', params)
}

const allergies = [{"id":"393","shortDescription":"Gluten-Free","longDescription":"Gluten-Free","searchValue":"393^Gluten-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"394","shortDescription":"Peanut-Free","longDescription":"Peanut-Free","searchValue":"394^Peanut-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"398","shortDescription":"Seafood-Free","longDescription":"Seafood-Free","searchValue":"398^Seafood-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"399","shortDescription":"Sesame-Free","longDescription":"Sesame-Free","searchValue":"399^Sesame-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"400","shortDescription":"Soy-Free","longDescription":"Soy-Free","searchValue":"400^Soy-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"396","shortDescription":"Dairy-Free","longDescription":"Dairy-Free","searchValue":"396^Dairy-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"397","shortDescription":"Egg-Free","longDescription":"Egg-Free","searchValue":"397^Egg-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"401","shortDescription":"Sulfite-Free","longDescription":"Sulfite-Free","searchValue":"401^Sulfite-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"395","shortDescription":"Tree Nut-Free","longDescription":"Tree Nut-Free","searchValue":"395^Tree Nut-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"392","shortDescription":"Wheat-Free","longDescription":"Wheat-Free","searchValue":"392^Wheat-Free","type":"allergy","localesAvailableIn":["en-US"]}]

const cuisines = [{"id":"cuisine-american","name":"American","type":"cuisine","description":"American","searchValue":"cuisine^cuisine-american","localesAvailableIn":["en-US"]},{"id":"cuisine-kid-friendly","name":"Kid-Friendly","type":"cuisine","description":"Kid-Friendly","searchValue":"cuisine^cuisine-kid-friendly","localesAvailableIn":["en-US"]},{"id":"cuisine-italian","name":"Italian","type":"cuisine","description":"Italian","searchValue":"cuisine^cuisine-italian","localesAvailableIn":["en-US"]},{"id":"cuisine-asian","name":"Asian","type":"cuisine","description":"Asian","searchValue":"cuisine^cuisine-asian","localesAvailableIn":["en-US"]},{"id":"cuisine-mexican","name":"Mexican","type":"cuisine","description":"Mexican","searchValue":"cuisine^cuisine-mexican","localesAvailableIn":["en-US"]},{"id":"cuisine-southern","name":"Southern & Soul Food","type":"cuisine","description":"Southern & Soul Food","searchValue":"cuisine^cuisine-southern","localesAvailableIn":["en-US"]},{"id":"cuisine-french","name":"French","type":"cuisine","description":"French","searchValue":"cuisine^cuisine-french","localesAvailableIn":["en-US"]},{"id":"cuisine-southwestern","name":"Southwestern","type":"cuisine","description":"Southwestern","searchValue":"cuisine^cuisine-southwestern","localesAvailableIn":["en-US"]},{"id":"cuisine-barbecue-bbq","name":"Barbecue","type":"cuisine","description":"Barbecue","searchValue":"cuisine^cuisine-barbecue-bbq","localesAvailableIn":["en-US"]},{"id":"cuisine-indian","name":"Indian","type":"cuisine","description":"Indian","searchValue":"cuisine^cuisine-indian","localesAvailableIn":["en-US"]},{"id":"cuisine-chinese","name":"Chinese","type":"cuisine","description":"Chinese","searchValue":"cuisine^cuisine-chinese","localesAvailableIn":["en-US"]},{"id":"cuisine-cajun","name":"Cajun & Creole","type":"cuisine","description":"Cajun & Creole","searchValue":"cuisine^cuisine-cajun","localesAvailableIn":["en-US"]},{"id":"cuisine-mediterranean","name":"Mediterranean","type":"cuisine","description":"Mediterranean","searchValue":"cuisine^cuisine-mediterranean","localesAvailableIn":["en-US"]},{"id":"cuisine-greek","name":"Greek","type":"cuisine","description":"Greek","searchValue":"cuisine^cuisine-greek","localesAvailableIn":["en-US"]},{"id":"cuisine-english","name":"English","type":"cuisine","description":"English","searchValue":"cuisine^cuisine-english","localesAvailableIn":["en-US"]},{"id":"cuisine-spanish","name":"Spanish","type":"cuisine","description":"Spanish","searchValue":"cuisine^cuisine-spanish","localesAvailableIn":["en-US"]},{"id":"cuisine-thai","name":"Thai","type":"cuisine","description":"Thai","searchValue":"cuisine^cuisine-thai","localesAvailableIn":["en-US"]},{"id":"cuisine-german","name":"German","type":"cuisine","description":"German","searchValue":"cuisine^cuisine-german","localesAvailableIn":["en-US"]},{"id":"cuisine-moroccan","name":"Moroccan","type":"cuisine","description":"Moroccan","searchValue":"cuisine^cuisine-moroccan","localesAvailableIn":["en-US"]},{"id":"cuisine-irish","name":"Irish","type":"cuisine","description":"Irish","searchValue":"cuisine^cuisine-irish","localesAvailableIn":["en-US"]},{"id":"cuisine-japanese","name":"Japanese","type":"cuisine","description":"Japanese","searchValue":"cuisine^cuisine-japanese","localesAvailableIn":["en-US"]},{"id":"cuisine-cuban","name":"Cuban","type":"cuisine","description":"Cuban","searchValue":"cuisine^cuisine-cuban","localesAvailableIn":["en-US"]},{"id":"cuisine-hawaiian","name":"Hawaiian","type":"cuisine","description":"Hawaiian","searchValue":"cuisine^cuisine-hawaiian","localesAvailableIn":["en-US"]},{"id":"cuisine-swedish","name":"Swedish","type":"cuisine","description":"Swedish","searchValue":"cuisine^cuisine-swedish","localesAvailableIn":["en-US"]},{"id":"cuisine-hungarian","name":"Hungarian","type":"cuisine","description":"Hungarian","searchValue":"cuisine^cuisine-hungarian","localesAvailableIn":["en-US"]},{"id":"cuisine-portuguese","name":"Portuguese","type":"cuisine","description":"Portuguese","searchValue":"cuisine^cuisine-portuguese","localesAvailableIn":["en-US"]}]

const courses = [{"id":"course-Main Dishes","name":"Main Dishes","type":"course","description":"Main Dishes","searchValue":"course^course-Main Dishes","localesAvailableIn":["en-US"]},{"id":"course-Desserts","name":"Desserts","type":"course","description":"Desserts","searchValue":"course^course-Desserts","localesAvailableIn":["en-US"]},{"id":"course-Side Dishes","name":"Side Dishes","type":"course","description":"Side Dishes","searchValue":"course^course-Side Dishes","localesAvailableIn":["en-US"]},{"id":"course-Appetizers","name":"Appetizers","type":"course","description":"Appetizers","searchValue":"course^course-Appetizers","localesAvailableIn":["en-US"]},{"id":"course-Salads","name":"Salads","type":"course","description":"Salads","searchValue":"course^course-Salads","localesAvailableIn":["en-US"]},{"id":"course-Breakfast and Brunch","name":"Breakfast and Brunch","type":"course","description":"Breakfast and Brunch","searchValue":"course^course-Breakfast and Brunch","localesAvailableIn":["en-US"]},{"id":"course-Breads","name":"Breads","type":"course","description":"Breads","searchValue":"course^course-Breads","localesAvailableIn":["en-US"]},{"id":"course-Soups","name":"Soups","type":"course","description":"Soups","searchValue":"course^course-Soups","localesAvailableIn":["en-US"]},{"id":"course-Beverages","name":"Beverages","type":"course","description":"Beverages","searchValue":"course^course-Beverages","localesAvailableIn":["en-US"]},{"id":"course-Condiments and Sauces","name":"Condiments and Sauces","type":"course","description":"Condiments and Sauces","searchValue":"course^course-Condiments and Sauces","localesAvailableIn":["en-US"]},{"id":"course-Cocktails","name":"Cocktails","type":"course","description":"Cocktails","searchValue":"course^course-Cocktails","localesAvailableIn":["en-US"]},{"id":"course-Snacks","name":"Snacks","type":"course","description":"Snacks","searchValue":"course^course-Snacks","localesAvailableIn":["en-US"]},{"id":"course-Lunch","name":"Lunch","type":"course","description":"Lunch","searchValue":"course^course-Lunch","localesAvailableIn":["en-US"]}]

const diets = [{"id":"388","shortDescription":"Lacto vegetarian","longDescription":"Lacto vegetarian","searchValue":"388^Lacto vegetarian","type":"diet","localesAvailableIn":["en-US"]},{"id":"389","shortDescription":"Ovo vegetarian","longDescription":"Ovo vegetarian","searchValue":"389^Ovo vegetarian","type":"diet","localesAvailableIn":["en-US"]},{"id":"390","shortDescription":"Pescetarian","longDescription":"Pescetarian","searchValue":"390^Pescetarian","type":"diet","localesAvailableIn":["en-US"]},{"id":"386","shortDescription":"Vegan","longDescription":"Vegan","searchValue":"386^Vegan","type":"diet","localesAvailableIn":["en-US"]},{"id":"387","shortDescription":"Lacto-ovo vegetarian","longDescription":"Vegetarian","searchValue":"387^Lacto-ovo vegetarian","type":"diet","localesAvailableIn":["en-US"]},{"id":"403","shortDescription":"Paleo","longDescription":"Paleo","searchValue":"403^Paleo","type":"diet","localesAvailableIn":["en-US"]}]
