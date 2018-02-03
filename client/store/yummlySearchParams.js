import axios from 'axios'
import history from '../history'


const example = {
  q: 'onion soup',
  requirePictures: true,
  allowedAllergy: ['Egg-Free', 'Gluten-Free'],
  allowedCourse: ['Main Dishes'],
  allowedCuisine: ['American', 'Chinese'],
  allowedDiet: ['Lacto vegetarian', 'Ovo vegetarian'],
  maxTotalTimeInSeconds: 5400,
  calories: [null, 1000], // nutrition.ENERC_KCAL.max: 1000
  protein: [100, null],  // nutrition.PROCNT.min: 100
  carbs: [null, 10],  // nutrition.CHOCDF.max: 10
  fat: [null, 10]  // nutrition.FAT.max: 10
}

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
export const searchByCalories = calories => ({type: SEARCH_BY_CALORIES, calories})
export const searchByProtein = protein => ({type: SEARCH_BY_PROTEIN, protein})
export const searchByCarbs = carbs => ({type: SEARCH_BY_CARBS, carbs})
export const searchByFat = fat => ({type: SEARCH_BY_FAT, fat})

/**
 * REDUCER
 */

const initialState = {
    allergies: [],
    cuisines: [],
    diets: [],
    nutrition: [],
    tastes: [],
    techniques: [],
    times: []
  }


export default function (state = initialState, action) {
  switch (action.type) {

    case SEARCH_ALLERGY:
      return {
        ...state,
        allergies: [...state.allergies, action.allergy]
      }

    case SEARCH_CUISINE:
      return {
        ...state,
        cuisines: [...state.cuisines, action.cuisine]
      }

    case SEARCH_DIET:
      return {
        ...state,
        diets: [...state.diets, action.diet]
      }

    case SEARCH_NUTRITION:
      return {
        ...state,
        nutrition: [...state.nutrition, action.nutrition]
      }

    case SEARCH_TASTE:
      return {
        ...state,
        tastes: [...state.tastes, action.taste]
      }

    case SEARCH_TECHNIQUE:
      return {
        ...state,
        techniques: [...state.techniques, action.technique]
      }

    case SEARCH_TIME:
      return {
        ...state,
        times: [...state.times, action.time]
      }

    default:
      return state
  }
}
