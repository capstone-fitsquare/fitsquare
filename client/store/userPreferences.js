import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
export const ADD_ALLERGY = 'ADD_ALLERGY'
export const ADD_CUISINE = 'ADD_CUISINE'
export const ADD_DIET = 'ADD_DIET'
export const ADD_NUTRITION = 'ADD_NUTRITION'
export const ADD_TASTE = 'ADD_TASTE'
export const ADD_TECHNIQUE = 'ADD_TECHNIQUE'
export const ADD_TIME = 'ADD_TIME'


/**
 * ACTION CREATORS
 */
export const addAllergy = (allergy) => ({type: ADD_ALLERGY, allergy})
export const addCuisine = (cuisine) => ({type: ADD_CUISINE, cuisine})
export const addDiet = (diet) => ({type: ADD_DIET, diet})
export const addNutrition = (nutrition) => ({type: ADD_NUTRITION, nutrition})
export const addTaste = (taste) => ({type: ADD_TASTE, taste})
export const addTechnique = (technique) => ({type: ADD_TECHNIQUE, technique})
export const addTime = (time) => ({type: ADD_TIME, time})


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
      vegan: false,
      vegetarian: false,
      lactoVegetarian: false,
      ovoVegetarina: false,
      pescetarian: false,
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

    case ADD_ALLERGY:
      return {
        ...state,
        allergies: {...state.allergies, [action.allergy]: true}
      }

    case ADD_CUISINE:
      return {
        ...state,
        cuisines: [...state.cuisines, action.cuisine]
      }

    case ADD_DIET:
      return {
        ...state,
        diets: [...state.diets, action.diet]
      }

    case ADD_NUTRITION:
      return {
        ...state,
        nutrition: [...state.nutrition, action.nutrition]
      }

    case ADD_TASTE:
      return {
        ...state,
        tastes: [...state.tastes, action.taste]
      }

    case ADD_TECHNIQUE:
      return {
        ...state,
        techniques: [...state.techniques, action.technique]
      }

    case ADD_TIME:
      return {
        ...state,
        times: [...state.times, action.time]
      }

    default:
      return state
  }
}
