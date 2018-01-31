import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
export const GET_NUMBER_OF_DAYS = 'GET_NUMBER_OF_DAYS'
export const ADD_NEW_NUMBER_OF_DAYS = 'ADD_NEW_NUMBER_OF_DAYS'
export const EDIT_NUMBER_OF_DAYS = 'EDIT_NUMBER_OF_DAYS'


/**
 * ACTION CREATORS
 */
export const getNumberOfDays = (numOfDays) => ({type: GET_NUMBER_OF_DAYS, numOfDays})
export const addNewNumberOfDays = (numOfDays) => ({type: ADD_NEW_NUMBER_OF_DAYS, numOfDays})
export const editNumberOfDays = (numOfDays) => ({type: EDIT_NUMBER_OF_DAYS, numOfDays})


/**
 * REDUCER
 */

export default function (state = 5, action) {
  switch (action.type) {

    case GET_NUMBER_OF_DAYS:
      return action.numOfDays

    case ADD_NEW_NUMBER_OF_DAYS:
      return action.numOfDays

    case EDIT_NUMBER_OF_DAYS:
      return action.numOfDays

    default:
      return state
  }
}
