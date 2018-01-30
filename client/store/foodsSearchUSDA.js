import axios from 'axios'
import history from '../history'
import { addFoodToGroceryList, addFoodToDayN } from './index'

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
    axios.get(`/api/usda-db/search/${searchTerms}`) // eventually, searchTerms needs to allow multiple words
      .then(res => res.data)
      .then(foodMatches => {
        const matches = foodMatches.list.item
        const action = getUsdaSearchMatches(matches);
        dispatch(action);
      })
      .catch(err => console.log(err))

export const fetchUsdaFoodReport = (ndbno, dayN, meal) =>
  dispatch =>
    axios.get(`/api/usda-db/reports/${ndbno}`)
      .then(res => res.data)
      .then(foodReport => {
        const action1 = getUsdaFoodReport(foodReport)
        const action2 = addFoodToGroceryList(foodReport)
        const action3 = addFoodToDayN(dayN, foodReport, meal)
        dispatch(action1)
        dispatch(action2)
        dispatch(action3)
      })
      .catch(err => console.log(err))


/**
 * REDUCER
 */

const initialState = {
  foodMatches: {},
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
