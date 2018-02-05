import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
export const ADD_ALLERGIES = 'ADD_ALLERGIES'
export const ADD_CUISINES = 'ADD_CUISINES'
export const ADD_DIETS = 'ADD_DIETS'
export const ADD_NUTRITION = 'ADD_NUTRITION'
export const ADD_TASTES = 'ADD_TASTES'
export const ADD_TECHNIQUES = 'ADD_TECHNIQUES'
export const ADD_TIMES = 'ADD_TIMES'


/**
 * ACTION CREATORS
 */
export const addAllergies = (allergies) => ({type: ADD_ALLERGIES, allergies})
export const addCuisines = (cuisines) => ({type: ADD_CUISINES, cuisines})
export const addDiets = (diets) => ({type: ADD_DIETS, diets})
export const addNutrition = (nutrition) => ({type: ADD_NUTRITION, nutrition})
export const addTastes = (tastes) => ({type: ADD_TASTES, tastes})
export const addTechniques = (techniques) => ({type: ADD_TECHNIQUES, techniques})
export const addTimes = (times) => ({type: ADD_TIMES, times})


export const syncLocalStorage = state => {
  const userPreferences = JSON.stringify(state.userPreferences)
  localStorage.setItem('userPreferences', userPreferences)
}

/**
 * REDUCER
 */

const initialState = JSON.parse(localStorage.getItem('userPreferences'))
  || {
    allergies: {
      dairyFree: false,
      eggFree: false,
      glutenFree: false,
      peanutFree: false,
      seafoodFree: false,
      sesameFree: false,
      soyFree: false,
      sulfiteFree: false,
      treeNutFree: false,
      wheatFree: false
    },
    cuisines: {
      american: false,
      asian: false,
      barbecue: false,
      cajun: false,
      chinese: false,
      indian: false,
      italian: false,
      mediterranean: false,
      mexican: false,
      southernSoulFood: false,
      thai: false
    },
    diets: {
      lactoVegetarian: false,
      ovoVegetarian: false,
      pescetarian: false,
      vegan: false,
      vegetarian: false,
      paleo: false,
    },
    nutrition: {
      lowFat: false,
      lowCalories: false,
      highFiber: false,
      lowCarb: false,
      lowSodium: false,
      lowSugar: false
    },
    tastes: {
      salty: false,
      sweet: false,
      bitter: false,
      savory: false,
      sour: false,
      spicy: false
    },
    techniques: {
      grilling: false,
      marinating: false,
      slowCooking: false
    },
    times: {
      under5min: false,
      under10min: false,
      under15min: false,
      under20min: false,
      under30min: false,
      under45min: false,
      under1hr: false,
      under2hrs: false
    }
  }


export default function (state = initialState, action) {
  switch (action.type) {

    case ADD_ALLERGIES:
      return {
        ...state,
        allergies: action.allergies
      }

    case ADD_CUISINES:
      return {
        ...state,
        cuisines: action.cuisines
      }

    case ADD_DIETS:
      return {
        ...state,
        diets: action.diets
      }

    case ADD_NUTRITION:
      return {
        ...state,
        nutrition: action.nutrition
      }

    case ADD_TASTES:
      return {
        ...state,
        tastes: action.tastes
      }

    case ADD_TECHNIQUES:
      return {
        ...state,
        techniques: action.techniques
      }

    case ADD_TIMES:
      return {
        ...state,
        times: action.times
      }

    default:
      return state
  }
}
