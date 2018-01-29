/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './Main'
export {default as UserHome} from './UserHome'
export {Login, Signup} from './AuthForm'

// newGoals folder
export {default as NewGoals} from './newGoals/NewGoals'
export {default as MacroGoalForm} from './newGoals/MacroGoalForm'
export {default as MicroGoalForm} from './newGoals/MicroGoalForm'

// newGroceryList folder
export {default as AllDays} from './newGroceryList/AllDays'
export {default as DayCard} from './newGroceryList/DayCard'
export {default as GroceryListForm} from './newGroceryList/GroceryListForm'
export {default as MacroGoalCountdown} from './newGroceryList/MacroGoalCountdown'
export {default as MicroGoalCountdown} from './newGroceryList/MicroGoalCountdown'
export {default as SearchButton} from './newGroceryList/SearchButton'


