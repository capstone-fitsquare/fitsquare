import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
export const GET_USDA_SEARCH_MATCHES = 'GET_USDA_SEARCH_MATCHES'
export const GET_USDA_FOOD_REPORT = 'GET_USDA_FOOD_REPORT'

/**
 * ACTION CREATORS
 */
export const getUsdaSearchMatches = foodMatches => ({type: GET_USDA_SEARCH_MATCHES, foodMatches})
export const getUsdaFoodReport = foodReport => ({type: GET_USDA_FOOD_REPORT, foodReport})

/**
 * THUNK CREATORS
 */
export const fetchUsdaSearchMatches = (searchTerms) =>
  dispatch =>
    axios.get(`/api/food-search/${searchTerms}`) // eventually, searchTerms needs to allow multiple words
      .then(res => res.data)
      .then(foodMatches => {
        const action = getUsdaSearchMatches(foodMatches);
        dispatch(action);
      })
      .catch(err => console.log(err))

export const fetchUsdaFoodReport = (ndbno) =>
  dispatch =>
    axios.get(`/api/food-items/report/${ndbno}`)
      .then(res => res.data)
      .then(foodReport => {
        const action = getUsdaFoodReport(foodReport);
        dispatch(action);
      })
      .catch(err => console.log(err))


/**
 * REDUCER
 */

const initialState = {
  foodMatches: [],
  foodReport: {}
}

export default function (state = initialState, action) {
  switch (action.type) {

    case GET_USDA_SEARCH_MATCHES:
      return {
      ...state,
      foodMatches: action.foodMatches }

    case GET_USDA_FOOD_REPORT:
      return {
        ...state,
        foodReport: action.foodReport }

    default:
      return state
  }
}
