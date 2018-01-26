import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import exercises from './exercises'
import foodItems from './foodItems'
import macroGoals from './macroGoals'
import microGoals from './microGoals'
import groceryLists from './groceryLists'
import listItems from './listItems'

const reducer = combineReducers({
  user,
  exercises,
  foodItems,
  macroGoals,
  microGoals,
  groceryLists,
  listItems
})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './exercises'
export * from './foodItems'
export * from './macroGoals'
export * from './microGoals'
export * from './groceryLists'
export * from './listItems'
