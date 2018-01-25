import axios from 'axios';

/**
 * ACTION TYPES
 */
export const GET_GROCERY_LISTS = 'GET_GROCERY_LISTS'; // GET
export const CREATE_GROCERY_LIST = 'CREATE_GROCERY_LIST'; // POST
export const EDIT_GROCERY_LIST = 'EDIT_GROCERY_LIST'; // PUT
export const DELETE_GROCERY_LIST = 'DELETE_GROCERY_LIST'; // DELETE

/**
 * ACTION CREATORS
 */
export const getGroceryLists = groceryLists => ({ type: GET_GROCERY_LISTS, groceryLists });
export const createGroceryList = groceryList => ({ type: CREATE_GROCERY_LIST, groceryList });
export const editGroceryList = groceryList => ({ type: EDIT_GROCERY_LIST, groceryList });
export const deleteGroceryList = id => ({ type: DELETE_GROCERY_LIST, id });

/**
 * THUNK CREATORS
 */
export const fetchGroceryLists = () => dispatch =>
  axios
    .get('/api/grocery-lists')
    .then(res => res.data)
    .then(groceryLists => {
      const action = getGroceryLists(groceryLists);
      dispatch(action);
    })
    .catch(err => console.log(err));

export const postGroceryList = formData => dispatch =>
  axios
    .post('/api/grocery-lists', formData)
    .then(res => res.data)
    .then(groceryList => {
      const action = createGroceryList(groceryList);
      dispatch(action);
    })
    .catch(err => console.log(err));

export const putGroceryList = (id, formData) => dispatch =>
  axios
    .put(`/api/grocery-lists/${id}`, formData)
    .then(res => res.data)
    .then(groceryList => {
      const action = editGroceryList(groceryList);
      dispatch(action);
    })
    .catch(err => console.log(err));

export const destroyGroceryList = id => dispatch =>
  axios
    .delete(`/api/grocery-lists/${id}`)
    .then(() => {
      const action = deleteGroceryList(id);
      dispatch(action);
    })
    .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case GET_GROCERY_LISTS:
      return action.groceryLists;

    case CREATE_GROCERY_LIST:
      return [...state, action.groceryList];

    case EDIT_GROCERY_LIST: {
      const itemToEdit = state.find(groceryList => groceryList.id === action.groceryList.id);
      const indexOfItemToEdit = state.indexOf(itemToEdit);
      let newState = [...state];
      newState.splice(indexOfItemToEdit, 1, action.groceryList);
      return newState;
    }

    case DELETE_GROCERY_LIST: {
      const itemToDelete = state.find(groceryList => groceryList.id === action.id);
      const indexOfItemToDelete = state.indexOf(itemToDelete);
      let newState = [...state];
      newState.splice(indexOfItemToDelete, 1);
      return newState;
    }

    default:
      return state;
  }
}
