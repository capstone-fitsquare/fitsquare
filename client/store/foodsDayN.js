import axios from 'axios'
import history from '../history'
import { getNumberOfDays } from './index'

/**
 * ACTION TYPES
 */
export const GET_FOODS_FROM_DAY_N = 'GET_FOODS_FROM_DAY_N'
export const ADD_FOOD_TO_DAY_N = 'ADD_FOOD_TO_DAY_N'
export const REMOVE_FOOD_FROM_DAY_N = 'REMOVE_FOOD_FROM_DAY_N'


/**
 * ACTION CREATORS
 */
// export const getFoodsFromDayN = (dayN, foods, meal) => ({type: GET_FOODS_FROM_DAY_N, dayN, foods, meal})
export const addFoodToDayN = (dayN, food, meal) => ({type: ADD_FOOD_TO_DAY_N, dayN, food, meal})
export const removeFoodFromDayN = (dayN, foodId, meal) => ({type: REMOVE_FOOD_FROM_DAY_N, dayN, foodId, meal})


/**
 * REDUCER
 */

const generateDays = n => {
  let output = [];
  for (let i = 0; i < n; i++){
    output.push({
      day: i,
      breakfast: [],
      lunch: [],
      dinner: [],
      snacks: []
    })
  }
  return output
}

const initialState = generateDays(7)  // can change later

export default function (state = initialState, action) {
  switch (action.type) {

    case ADD_FOOD_TO_DAY_N: {
      const newState = [...state]
      const { dayN, food, meal } = action
      const dayNFoods = newState[dayN] // object including breakfast, lunch, dinner, snacks [for particular day]
      const dayNMealFoods = dayNFoods[meal] // array of foods [for particular meal]
      dayNMealFoods.push(food) // add new food to particular day's meal foods array
      dayNFoods[meal].splice(dayN, 1, dayNMealFoods);
      return newState;
    }

    case REMOVE_FOOD_FROM_DAY_N: {
      const newState = [...state]
      const { dayN, foodId, meal } = action
      const dayNFoods = newState[dayN] // object including breakfast, lunch, dinner, snacks [for particular day]
      const dayNMealFoods = dayNFoods[meal] // array of foods [for particular meal]
      const foodToDelete = dayNMealFoods.find(food => food.id === foodId)
      const indexOfFoodToDelete = dayNMealFoods.indexOf(foodToDelete)
      dayNFoods[meal].splice(indexOfFoodToDelete, 1);
      return newState;
    }

    default:
      return state
  }
}
