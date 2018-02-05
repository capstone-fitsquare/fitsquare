/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export { default as Main } from './Main';
export { default as UserHome } from './UserHome';
export { Login, Signup } from './AuthForm';
export { default as Animations } from './Animations'

// intro folder
export { default as IntroSequence } from './intro/IntroSequence';
export { default as Welcome } from './intro/01_Welcome';
export { default as Goal } from './intro/02_Goal';
export { default as GatherBiometrics } from './intro/03_GatherBiometrics';
export { default as ActivityLevel } from './intro/04_ActivityLevel';
export { default as AnalyzeBiometrics } from './intro/05_AnalyzeBiometrics';
export { default as BiometricsReport } from './intro/06_BiometricsReport';
export { default as GatherPreferences } from './intro/07_GatherPreferences';
export { default as GenerateFoodPlan } from './intro/08_GenerateFoodPlan';

// newGoals folder
export { default as NewGoals } from './newGoals/NewGoals';
export { default as MacroGoalForm } from './newGoals/MacroGoalForm';
export { default as MicroGoalForm } from './newGoals/MicroGoalForm';

// foodPlan folder
export { default as AllDays } from './foodPlan/AllDays';
export { default as DayCard } from './foodPlan/DayCard';
export { default as FoodPlanWrapper } from './foodPlan/FoodPlanWrapper';
export { default as GroceryList } from './foodPlan/GroceryList';
export { default as MacroGoalCountdown } from './foodPlan/MacroGoalCountdown';
export { default as MicroGoalCountdown } from './foodPlan/MicroGoalCountdown';
export { default as SearchButton } from './foodPlan/SearchButton';

// test folder
export { default as Test } from './test/Test';

// visualizations folder
export { default as Arc } from './visualizations/Arc';
export { default as LabeledArc } from './visualizations/LabeledArc';
export { default as PieChart } from './visualizations/PieChart';
