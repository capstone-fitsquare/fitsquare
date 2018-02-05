import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
export const GET_FOODS_FROM_GROCERY_LIST = 'GET_FOOD_FROM_GROCERY_LIST'
export const ADD_FOOD_TO_GROCERY_LIST = 'ADD_FOOD_TO_GROCERY_LIST'
// export const REMOVE_FOOD_FROM_GROCERY_LIST = 'REMOVE_FOOD_FROM_GROCERY_LIST'

/**
 * ACTION CREATORS
 */
export const getFoodsFromGroceryList = (foods) => ({type: GET_FOODS_FROM_GROCERY_LIST, foods})
export const addFoodToGroceryList = (food) => ({type: ADD_FOOD_TO_GROCERY_LIST, food})
// export const removeFoodFromGroceryList = (foodId) => ({type: REMOVE_FOOD_FROM_GROCERY_LIST, foodId})


/**
 * REDUCER
 */


export default function (state = [], action) {
  switch (action.type) {

    case GET_FOODS_FROM_GROCERY_LIST:
      return action.foods

    case ADD_FOOD_TO_GROCERY_LIST:
      return [...state, action.food]

    // case REMOVE_FOOD_FROM_GROCERY_LIST: {
    //   const itemToEdit = state.find(foodObj => foodObj.report.food.ndbno === action.foodId);
    //   const indexOfItemToEdit = state.indexOf(itemToEdit);
    //   let newState = [...state];
    //   newState.splice(indexOfItemToEdit, 1);
    //   return newState;
    // }

    default:
      return state
  }
}
