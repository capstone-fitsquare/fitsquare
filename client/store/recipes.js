import axios from 'axios';

/**
 * ACTION TYPES
 */
export const GET_RECIPES = 'GET_RECIPES'; // GET
export const CREATE_RECIPE = 'CREATE_RECIPE'; // POST
export const EDIT_RECIPE = 'EDIT_RECIPE'; // PUT
export const DELETE_RECIPE = 'DELETE_RECIPE'; // DELETE

/**
 * ACTION CREATORS
 */
export const getRecipes = recipes => ({ type: GET_RECIPES, recipes });
export const createRecipe = recipe => ({ type: CREATE_RECIPE, recipe });
export const editRecipe = recipe => ({ type: EDIT_RECIPE, recipe });
export const deleteRecipe = id => ({ type: DELETE_RECIPE, id });

/**
 * THUNK CREATORS
 */
export const fetchRecipes = () => dispatch =>
  axios
    .get('/api/recipes')
    .then(res => res.data)
    .then(recipes => {
      const action = getRecipes(recipes);
      dispatch(action);
    })
    .catch(err => console.log(err));

export const postRecipe = formData => dispatch =>
  axios
    .post('/api/recipes', formData)
    .then(res => res.data)
    .then(recipe => {
      const action = createRecipe(recipe);
      dispatch(action);
    })
    .catch(err => console.log(err));

export const putRecipe = (id, formData) => dispatch =>
  axios
    .put(`/api/recipes/${id}`, formData)
    .then(res => res.data)
    .then(recipe => {
      const action = editRecipe(recipe);
      dispatch(action);
    })
    .catch(err => console.log(err));

export const destroyRecipe = id => dispatch =>
  axios
    .delete(`/api/recipes/${id}`)
    .then(() => {
      const action = deleteRecipe(id);
      dispatch(action);
    })
    .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case GET_RECIPES:
      return action.recipes;

    case CREATE_RECIPE:
      return [...state, action.recipe];

    case EDIT_RECIPE: {
      const itemToEdit = state.find(recipe => recipe.id === action.recipe.id);
      const indexOfItemToEdit = state.indexOf(itemToEdit);
      let newState = [...state];
      newState.splice(indexOfItemToEdit, 1, action.recipe);
      return newState;
    }

    case DELETE_RECIPE: {
      const itemToDelete = state.find(recipe => recipe.id === action.recipe.id);
      const indexOfItemToDelete = state.indexOf(itemToDelete);
      let newState = [...state];
      newState.splice(indexOfItemToDelete, 1);
      return newState;
    }

    default:
      return state;
  }
}
