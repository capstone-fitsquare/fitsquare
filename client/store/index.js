import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import exercises from './exercises'
import macroGoal from './macroGoals'
import microGoals from './microGoals'
import groceryLists from './groceryLists'
import listItems from './listItems'
import foodsSearchUSDA from './foodsSearchUSDA'
import foodsDayN from './foodsDayN'
import foodsGroceryList from './foodsGroceryList'
import numOfDays from './numOfDays'
import introProfile from './introProfile'
import userPreferences from './userPreferences'
import yummlySearchParams from './yummlySearchParams'
import yummlySearch from './yummlySearch'
import recipes from './recipes'

const reducer = combineReducers({
  user,
  exercises,
  macroGoal,
  microGoals,
  groceryLists,
  listItems,
  foodsSearchUSDA,
  foodsDayN,
  foodsGroceryList,
  numOfDays,
  introProfile,
  userPreferences,
  yummlySearchParams,
  yummlySearch,
  recipes
})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './exercises'
export * from './macroGoals'
export * from './microGoals'
export * from './groceryLists'
export * from './listItems'
export * from './foodsSearchUSDA'
export * from './foodsDayN'
export * from './foodsGroceryList'
export * from './numOfDays'
export * from './introProfile'
export * from './userPreferences'
export * from './yummlySearchParams'
export * from './yummlySearch'
export * from './recipes'

