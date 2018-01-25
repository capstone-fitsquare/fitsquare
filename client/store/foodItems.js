import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
export const GET_FOOD_ITEMS = 'GET_FOOD_ITEMS' // GET
export const CREATE_FOOD_ITEM = 'CREATE_FOOD_ITEM' // POST
export const EDIT_FOOD_ITEM = 'EDIT_FOOD_ITEM' // PUT
export const DELETE_FOOD_ITEM = 'DELETE_FOOD_ITEM' // DELETE

/**
 * ACTION CREATORS
 */
export const getFoodItems = foodItems => ({type: GET_FOOD_ITEMS, foodItems})
export const createFoodItem = foodItem => ({type: CREATE_FOOD_ITEM, foodItem})
export const editFoodItem = foodItem => ({type: EDIT_FOOD_ITEM, foodItem})
export const deleteFoodItem = id => ({type: DELETE_FOOD_ITEM, id})

/**
 * THUNK CREATORS
 */
export const fetchFoodItems = () =>
  dispatch =>
    axios.get('/api/food-items')
      .then(res => res.data)
      .then(foodItems => {
        const action = getFoodItems(foodItems);
        dispatch(action);
      })
      .catch(err => console.log(err))

export const postFoodItem = (formData) =>
  dispatch =>
    axios.post('/api/food-items', formData)
      .then(res => res.data)
      .then(foodItem => {
        const action = createFoodItem(foodItem);
        dispatch(action);
      })
      .catch(err => console.log(err))

export const putFoodItem = (id, formData) =>
  dispatch =>
    axios.put(`/api/food-items/${id}`, formData)
      .then(res => res.data)
      .then(foodItem => {
        const action = editFoodItem(foodItem);
        dispatch(action);
      })
      .catch(err => console.log(err))

export const destroyFoodItem = (id) =>
  dispatch =>
    axios.delete(`/api/food-items/${id}`)
      .then(() => {
        const action = deleteFoodItem(id);
        dispatch(action);
      })
      .catch(err => console.log(err))


/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {

    case GET_FOOD_ITEMS:
      return action.foodItems

    case CREATE_FOOD_ITEM:
      return [...state, action.foodItem]

    case EDIT_FOOD_ITEM: {
      const itemToEdit = state.find(foodItem => foodItem.id === action.foodItem.id);
      const indexOfItemToEdit = state.indexOf(itemToEdit);
      let newState = [...state];
      newState.splice(indexOfItemToEdit, 1, action.foodItem);
      return newState;
    }

    case DELETE_FOOD_ITEM: {
      const itemToDelete = state.find(foodItem => foodItem.id === action.id);
      const indexOfItemToDelete = state.indexOf(itemToDelete);
      let newState = [...state];
      newState.splice(indexOfItemToDelete, 1);
      return newState;
    }

    default:
      return state
  }
}
