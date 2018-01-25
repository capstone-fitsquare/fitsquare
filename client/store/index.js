import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import exercise from './exercise'
import macroGoals from './macroGoals'
import microGoals from './microGoals'
import groceryLists from './groceryLists'

const reducer = combineReducers({
  user,
  exercise,
  macroGoals,
  microGoals,
  groceryLists
})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './exercise'
export * from './macroGoals'
export * from './microGoals'
export * from './groceryLists'
