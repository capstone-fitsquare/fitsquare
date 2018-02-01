import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */

// only 'add' and 'change' (not 'remove') since must choose one ('lose fat', 'gain muscle', 'maintain')
export const ADD_GOAL_TYPE = 'ADD_GOAL_TYPE'
export const CHANGE_GOAL_TYPE = 'CHANGE_GOAL_TYPE'

export const ADD_HEIGHT_FEET = 'ADD_HEIGHT_FEET'
export const EDIT_HEIGHT_FEET = 'EDIT_HEIGHT_FEET'

export const ADD_HEIGHT_INCHES = 'ADD_HEIGHT_INCHES'
export const EDIT_HEIGHT_INCHES = 'EDIT_HEIGHT_INCHES'

export const ADD_WEIGHT = 'ADD_WEIGHT'
export const EDIT_WEIGHT = 'EDIT_WEIGHT'

export const ADD_AGE = 'ADD_AGE'
export const EDIT_AGE = 'EDIT_AGE'

export const ADD_GENDER = 'ADD_GENDER'
export const EDIT_GENDER = 'EDIT_GENDER'

export const ADD_ACTIVITY_LEVEL = 'ADD_ACTIVITY_LEVEL'
export const EDIT_ACTIVITY_LEVEL = 'EDIT_ACTIVITY_LEVEL'

export const ADD_CALORIES = 'ADD_CALORIES'
export const ADD_PROTEIN = 'ADD_PROTEIN'
export const ADD_CARBS = 'ADD_CARBS'
export const ADD_FAT = 'ADD_FAT'

export const ADD_VEGETARIAN_OPTION = 'ADD_VEGETARIAN_OPTION'
export const EDIT_VEGETARIAN_OPTION = 'EDIT_VEGETARIAN_OPTION'

// CUSTOM PREFERENCES??


/**
 * ACTION CREATORS
 */

// (frontend changes : 'add') as (backend/db changes : 'change'/'edit')
export const addGoalType = goalType => ({type: ADD_GOAL_TYPE, goalType})
export const changeGoalType = goalType => ({type: CHANGE_GOAL_TYPE, goalType})

export const addHeightFeet = heightFeet => ({type: ADD_HEIGHT_FEET, heightFeet})
export const editHeightFeet = heightFeet => ({type: EDIT_HEIGHT_FEET, heightFeet})

export const addHeightInches = heightInches => ({type: ADD_HEIGHT_INCHES, heightInches})
export const editHeightInches = heightInches => ({type: EDIT_HEIGHT_INCHES, heightInches})

export const addWeight = weight => ({type: ADD_WEIGHT, weight})
export const editWeight = weight => ({type: EDIT_WEIGHT, weight})

export const addAge = age => ({type: ADD_AGE, age})
export const editAge = age => ({type: EDIT_AGE, age})

export const addGender = gender => ({type: ADD_GENDER, gender})
export const editGender = gender => ({type: EDIT_GENDER, gender})

export const addActivityLevel = activityLevel => ({type: ADD_ACTIVITY_LEVEL, activityLevel})
export const editActivityLevel = activityLevel => ({type: EDIT_ACTIVITY_LEVEL, activityLevel})

export const addCalories = calories => ({type: ADD_CALORIES, calories})
export const addProtein = protein => ({type: ADD_PROTEIN, protein})
export const addCarbs = carbs => ({type: ADD_CARBS, carbs})
export const addFat = fat => ({type: ADD_FAT, fat})

export const addVegOption = vegOption => ({type: ADD_VEGETARIAN_OPTION, vegOption})
export const editVegOption = vegOption => ({type: EDIT_VEGETARIAN_OPTION, vegOption})


/**
 * REDUCER
 */

const initialState = {
  goalType: '',
  heightFeet: '',
  heightInches: '',
  weight: '',
  age: '',
  gender: '',
  activityLevel: '',
  calories: 0,
  protein: 0,
  carbs: 0,
  fat: 0,
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

    case ADD_HEIGHT_FEET:
      return {
        ...state,
        heightFeet: action.heightFeet
      }

    case EDIT_HEIGHT_FEET:
      return {
        ...state,
        heightFeet: action.heightFeet
      }

    case ADD_HEIGHT_INCHES:
      return {
        ...state,
        heightInches: action.heightInches
      }

    case EDIT_HEIGHT_INCHES:
      return {
        ...state,
        heightInches: action.heightInches
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

      case ADD_ACTIVITY_LEVEL:
      return {
        ...state,
        activityLevel: action.activityLevel
      }

    case EDIT_ACTIVITY_LEVEL:
      return {
        ...state,
        activityLevel: action.activityLevel
      }

    case ADD_CALORIES:
      return {
        ...state,
        calories: action.calories
      }

    case ADD_PROTEIN:
      return {
        ...state,
        protein: action.protein
      }

    case ADD_CARBS:
      return {
        ...state,
        carbs: action.carbs
      }

    case ADD_FAT:
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
