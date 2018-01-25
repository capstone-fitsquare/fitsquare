import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
export const GET_MICRO_GOALS = 'GET_MICRO_GOALS' // GET
export const CREATE_MICRO_GOAL = 'CREATE_MICRO_GOAL' // POST
export const EDIT_MICRO_GOAL = 'EDIT_MICRO_GOAL' // PUT
export const DELETE_MICRO_GOAL = 'DELETE_MICRO_GOAL' // DELETE

/**
 * ACTION CREATORS
 */
export const getMicroGoals = microGoals => ({type: GET_MICRO_GOALS, microGoals})
export const createMicroGoal = microGoal => ({type: CREATE_MICRO_GOAL, microGoal})
export const editMicroGoal = microGoal => ({type: EDIT_MICRO_GOAL, microGoal})
export const deleteMicroGoal = id => ({type: DELETE_MICRO_GOAL, id})

/**
 * THUNK CREATORS
 */
export const fetchMicroGoals = () =>
  dispatch =>
    axios.get('/api/micro-goals')
      .then(res => res.data)
      .then(microGoals => {
        const action = getMicroGoals(microGoals);
        dispatch(action);
      })
      .catch(err => console.log(err))

export const postMicroGoal = (formData) =>
  dispatch =>
    axios.post('/api/micro-goals', formData)
      .then(res => res.data)
      .then(microGoal => {
        const action = createMicroGoal(microGoal);
        dispatch(action);
      })
      .catch(err => console.log(err))

export const putMicroGoal = (id, formData) =>
  dispatch =>
    axios.put(`/api/micro-goals/${id}`, formData)
      .then(res => res.data)
      .then(microGoal => {
        const action = editMicroGoal(microGoal);
        dispatch(action);
      })
      .catch(err => console.log(err))

export const destroyMicroGoal = (id) =>
  dispatch =>
    axios.delete(`/api/micro-goals/${id}`)
      .then(() => {
        const action = deleteMicroGoal(id);
        dispatch(action);
      })
      .catch(err => console.log(err))


/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {

    case GET_MICRO_GOALS:
      return action.microGoals

    case CREATE_MICRO_GOAL:
      return [...state, action.microGoal]

    case EDIT_MICRO_GOAL: {
      const itemToEdit = state.find(microGoal => microGoal.id === action.microGoal.id);
      const indexOfItemToEdit = state.indexOf(itemToEdit);
      let newState = [...state];
      newState.splice(indexOfItemToEdit, 1, action.microGoal);
      return newState;
    }

    case DELETE_MICRO_GOAL: {
      const itemToDelete = state.find(microGoal => microGoal.id === action.id);
      const indexOfItemToDelete = state.indexOf(itemToDelete);
      let newState = [...state];
      newState.splice(indexOfItemToDelete, 1);
      return newState;
    }

    default:
      return state
  }
}
