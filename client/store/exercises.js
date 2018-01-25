import axios from 'axios';

/**
 * ACTION TYPES
 */
export const GET_EXERCISES = 'GET_EXERCISES'; // GET
export const CREATE_EXERCISE = 'CREATE_EXERCISE'; // POST
export const EDIT_EXERCISE = 'EDIT_EXERCISE'; // PUT
export const DELETE_EXERCISE = 'DELETE_EXERCISE'; // DELETE

/**
 * ACTION CREATORS
 */
export const getExercises = exercises => ({ type: GET_EXERCISES, exercises });
export const createExercise = exercise => ({ type: CREATE_EXERCISE, exercise });
export const editExercise = exercise => ({ type: EDIT_EXERCISE, exercise });
export const deleteExercise = id => ({ type: DELETE_EXERCISE, id });

/**
 * THUNK CREATORS
 */
export const fetchExercises = () => dispatch =>
  axios
    .get('/api/exercises')
    .then(res => res.data)
    .then(exercises => {
      const action = getExercises(exercises);
      dispatch(action);
    })
    .catch(err => console.log(err));

export const postExercise = formData => dispatch =>
  axios
    .post('/api/exercises', formData)
    .then(res => res.data)
    .then(exercise => {
      const action = createExercise(exercise);
      dispatch(action);
    })
    .catch(err => console.log(err));

export const putExercise = (id, formData) => dispatch =>
  axios
    .put(`/api/exercises/${id}`, formData)
    .then(res => res.data)
    .then(exercise => {
      const action = editExercise(exercise);
      dispatch(action);
    })
    .catch(err => console.log(err));

export const destroyExercise = id => dispatch =>
  axios
    .delete(`/api/exercises/${id}`)
    .then(() => {
      const action = deleteExercise(id);
      dispatch(action);
    })
    .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case GET_EXERCISES:
      return action.exercises;

    case CREATE_EXERCISE:
      return [...state, action.exercise];

    case EDIT_EXERCISE: {
      const itemToEdit = state.find(exercise => exercise.id === action.exercise.id);
      const indexOfItemToEdit = state.indexOf(itemToEdit);
      let newState = [...state];
      newState.splice(indexOfItemToEdit, 1, action.exercise);
      return newState;
    }

    case DELETE_EXERCISE: {
      const itemToDelete = state.find(exercise => exercise.id === action.exercise.id);
      const indexOfItemToDelete = state.indexOf(itemToDelete);
      let newState = [...state];
      newState.splice(indexOfItemToDelete, 1);
      return newState;
    }

    default:
      return state;
  }
}
