import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
export const ADD_SEARCH_TERMS = 'ADD_SEARCH_TERMS'
export const SEARCH_BY_ALLERGY = 'SEARCH_BY_ALLERGY'
export const SEARCH_BY_COURSE = 'SEARCH_BY_COURSE'
export const SEARCH_BY_CUISINE = 'SEARCH_BY_CUISINE'
export const SEARCH_BY_DIET = 'SEARCH_BY_DIET'
export const SEARCH_BY_TIME = 'SEARCH_BY_TIME'
export const SEARCH_BY_CALORIES = 'SEARCH_BY_CALORIES'
export const SEARCH_BY_PROTEIN = 'SEARCH_BY_PROTEIN'
export const SEARCH_BY_CARBS = 'SEARCH_BY_CARBS'
export const SEARCH_BY_FAT = 'SEARCH_BY_FAT'


/**
 * ACTION CREATORS
 */
export const addSearchTerms = searchTerms => ({type: ADD_SEARCH_TERMS, searchTerms})
export const searchByAllergy = allergy => ({type: SEARCH_BY_ALLERGY, allergy})
export const searchByCourse = course => ({type: SEARCH_BY_COURSE, course})
export const searchByCuisine = cuisine => ({type: SEARCH_BY_CUISINE, cuisine})
export const searchByDiet = diet => ({type: SEARCH_BY_DIET, diet})
export const searchByTime = time => ({type: SEARCH_BY_TIME, time})
export const searchByCalories = (minCalories, maxCalories) => ({type: SEARCH_BY_CALORIES, minCalories, maxCalories})
export const searchByProtein = (minProtein, maxProtein) => ({type: SEARCH_BY_PROTEIN, minProtein, maxProtein})
export const searchByCarbs = (minCarbs, maxCarbs) => ({type: SEARCH_BY_CARBS, minCarbs, maxCarbs})
export const searchByFat = (minFat, maxFat) => ({type: SEARCH_BY_FAT, minFat, maxFat})

/**
 * REDUCER
 */


const example = {
  q: 'onion soup',
  requirePictures: true,
  allowedAllergy: ['Egg-Free', 'Gluten-Free'],
  allowedCourse: ['Main Dishes'],
  allowedCuisine: ['American', 'Chinese'],
  allowedDiet: ['Lacto vegetarian', 'Ovo vegetarian'],
  maxTotalTimeInSeconds: 5400,
  calories: { min: null, max: 1000 }, // nutrition.ENERC_KCAL.max: 1000
  protein: { min: 100, max: null },  // nutrition.PROCNT.min: 100
  carbs: { min: null, max: 10 },  // nutrition.CHOCDF.max: 10
  fat: { min: null, max: 10 }  // nutrition.FAT.max: 10
}

const initialState = {
  q: '',
  allowedAllergy: [],
  allowedCourse: [],
  allowedCuisine: [],
  allowedDiet: [],
  maxTotalTimeInSeconds: null,
  calories: {
    min: null,
    max: null
  },
  protein: {
    min: null,
    max: null
  },
  carbs: {
    min: null,
    max: null
  },
  fat: {
    min: null,
    max: null
  }
}

export default function (state = initialState, action) {
  switch (action.type) {

    case ADD_SEARCH_TERMS:
      return {
        ...state,
        q: action.searchTerms
      }

    case SEARCH_BY_ALLERGY:
      return {
        ...state,
        allowedDiet: [...state.allowedAllergy, action.allergy]
      }

    case SEARCH_BY_COURSE:
      return {
        ...state,
        allowedCourse: [...state.allowedCourse, action.course]
      }

    case SEARCH_BY_CUISINE:
      return {
        ...state,
        allowedCuisine: [...state.allowedCuisine, action.cuisine]
      }

    case SEARCH_BY_DIET:
      return {
        ...state,
        allowedDiet: [...state.allowedDiet, action.diet]
      }

    case SEARCH_BY_TIME:
      return {
        ...state,
        maxTotalTimeInSeconds: action.time
      }

    case SEARCH_BY_CALORIES:
      return {
        ...state,
        calories: {...state.calories, min: action.minCalories, max: action.maxCalories}
      }

    case SEARCH_BY_PROTEIN:
      return {
        ...state,
        protein: {...state.protein, min: action.minProtein, max: action.maxProtein}
      }

    case SEARCH_BY_CARBS:
      return {
        ...state,
        carbs: {...state.carbs, min: action.minCarbs, max: action.maxCarbs}
      }

    case SEARCH_BY_FAT:
      return {
        ...state,
        fat: {...state.fat, min: action.minFat, max: action.maxFat}
      }

    default:
      return state
  }
}
