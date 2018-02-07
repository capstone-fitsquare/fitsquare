import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
export const GET_MACRO_GOALS = 'GET_MACRO_GOALS' // GET
export const CREATE_MACRO_GOAL = 'CREATE_MACRO_GOAL' // POST
export const EDIT_MACRO_GOAL = 'EDIT_MACRO_GOAL' // PUT
export const DELETE_MACRO_GOAL = 'DELETE_MACRO_GOAL' // DELETE

/**
 * ACTION CREATORS
 */
export const getMacroGoals = macroGoals => ({type: GET_MACRO_GOALS, macroGoals})
export const createMacroGoal = macroGoal => ({type: CREATE_MACRO_GOAL, macroGoal})
export const editMacroGoal = macroGoal => ({type: EDIT_MACRO_GOAL, macroGoal})
export const deleteMacroGoal = id => ({type: DELETE_MACRO_GOAL, id})

/**
 * THUNK CREATORS
 */
export const fetchMacroGoals = () =>
  dispatch =>
    axios.get('/api/macro-goals')
      .then(res => res.data)
      .then(macroGoals => {
        const action = getMacroGoals(macroGoals);
        dispatch(action);
      })
      .catch(err => console.log(err))

export const postMacroGoal = (formData) =>
  dispatch =>
    axios.post('/api/macro-goals', formData)
      .then(res => res.data)
      .then(macroGoal => {
        const action = createMacroGoal(macroGoal);
        dispatch(action);
        console.log('created macro goal!! check database')
      })
      .catch(err => console.log(err))

export const putMacroGoal = (id, formData) =>
  dispatch =>
    axios.put(`/api/macro-goals/${id}`, formData)
      .then(res => res.data)
      .then(macroGoal => {
        const action = editMacroGoal(macroGoal);
        dispatch(action);
      })
      .catch(err => console.log(err))

export const destroyMacroGoal = (id) =>
  dispatch =>
    axios.delete(`/api/macro-goals/${id}`)
      .then(() => {
        const action = deleteMacroGoal(id);
        dispatch(action);
      })
      .catch(err => console.log(err))


/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {

    // case GET_MACRO_GOALS:
    //   return action.macroGoals

    case CREATE_MACRO_GOAL:
      return action.macroGoal

    // case EDIT_MACRO_GOAL: {
    //   const itemToEdit = state.find(macroGoal => macroGoal.id === action.macroGoal.id);
    //   const indexOfItemToEdit = state.indexOf(itemToEdit);
    //   let newState = [...state];
    //   newState.splice(indexOfItemToEdit, 1, action.macroGoal);
    //   return newState;
    // }

    // case DELETE_MACRO_GOAL: {
    //   const itemToDelete = state.find(macroGoal => macroGoal.id === action.id);
    //   const indexOfItemToDelete = state.indexOf(itemToDelete);
    //   let newState = [...state];
    //   newState.splice(indexOfItemToDelete, 1);
    //   return newState;
    // }

    default:
      return state
  }
}
