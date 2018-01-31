import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */

// only 'add' and 'change' (not 'remove') since must choose one ('lose fat', 'gain muscle', 'maintain')
export const ADD_GOAL_TYPE = 'ADD_GOAL_TYPE'
export const CHANGE_GOAL_TYPE = 'CHANGE_GOAL_TYPE'

export const ADD_HEIGHT = 'ADD_HEIGHT'
export const EDIT_HEIGHT = 'EDIT_HEIGHT'

export const ADD_WEIGHT = 'ADD_WEIGHT'
export const EDIT_WEIGHT = 'EDIT_WEIGHT'

export const ADD_AGE = 'ADD_AGE'
export const EDIT_AGE = 'EDIT_AGE'

export const ADD_GENDER = 'ADD_GENDER'
export const EDIT_GENDER = 'EDIT_GENDER'

export const EDIT_CALORIES = 'EDIT_CALORIES'
export const EDIT_PROTEIN = 'EDIT_PROTEIN'
export const EDIT_CARBS = 'EDIT_CARBS'
export const EDIT_FAT = 'EDIT_FAT'

export const ADD_VEGETARIAN_OPTION = 'ADD_VEGETARIAN_OPTION'
export const EDIT_VEGETARIAN_OPTION = 'EDIT_VEGETARIAN_OPTION'

// CUSTOM PREFERENCES??


/**
 * ACTION CREATORS
 */

// (frontend changes : 'add') as (backend/db changes : 'change'/'edit')
export const addGoalType = goalType => ({type: ADD_GOAL_TYPE, goalType})
export const changeGoalType = goalType => ({type: CHANGE_GOAL_TYPE, goalType})

export const addHeight = height => ({type: ADD_HEIGHT, height})
export const editHeight = height => ({type: EDIT_HEIGHT, height})

export const addWeight = weight => ({type: ADD_WEIGHT, weight})
export const editWeight = weight => ({type: EDIT_WEIGHT, weight})

export const addAge = age => ({type: ADD_AGE, age})
export const editAge = age => ({type: EDIT_AGE, age})

export const addGender = gender => ({type: ADD_GENDER, gender})
export const editGender = gender => ({type: EDIT_GENDER, gender})

export const editCalories = calories => ({type: EDIT_CALORIES, calories})
export const editProtein = protein => ({type: EDIT_PROTEIN, protein})
export const editCarbs = carbs => ({type: EDIT_CARBS, carbs})
export const editFat = fat => ({type: EDIT_FAT, fat})

export const addVegOption = vegOption => ({type: ADD_VEGETARIAN_OPTION, vegOption})
export const editVegOption = vegOption => ({type: EDIT_VEGETARIAN_OPTION, vegOption})


/**
 * REDUCER
 */

const initialState = {
  goalType: '',
  height: '',
  weight: '',
  age: '',
  gender: '',
  calories: '',
  protein: '',
  carbs: '',
  fat: '',
  vegOption: ''
}

export default function (state = initialState, action) {
  switch (action.type) {

    case ADD_GOAL_TYPE:
      return {
        ...state,
        goalType: action.goalType
      }

    case CHANGE_GOAL_TYPE:
      return {
        ...state,
        goalType: action.goalType
      }

    case ADD_HEIGHT:
      return {
        ...state,
        height: action.height
      }

    case EDIT_HEIGHT:
      return {
        ...state,
        height: action.height
      }

    case ADD_WEIGHT:
      return {
        ...state,
        weight: action.weight
      }

    case EDIT_WEIGHT:
      return {
        ...state,
        weight: action.weight
      }

    case ADD_AGE:
      return {
        ...state,
        age: action.age
      }

    case EDIT_AGE:
      return {
        ...state,
        age: action.age
      }

    case ADD_GENDER:
      return {
        ...state,
        gender: action.gender
      }

    case EDIT_GENDER:
      return {
        ...state,
        gender: action.gender
      }

    case EDIT_CALORIES:
      return {
        ...state,
        calories: action.calories
      }

    case EDIT_PROTEIN:
      return {
        ...state,
        protein: action.protein
      }

    case EDIT_CARBS:
      return {
        ...state,
        carbs: action.carbs
      }

    case EDIT_FAT:
      return {
        ...state,
        fat: action.fat
      }

    case ADD_VEGETARIAN_OPTION:
      return {
        ...state,
        vegOption: action.vegOption
      }

    case EDIT_VEGETARIAN_OPTION:
      return {
        ...state,
        vegOption: action.vegOption
      }

    default:
      return state
  }
}
