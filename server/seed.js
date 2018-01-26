const { db, FoodItem, GroceryList, ListItem, MacroGoal, MicroGoal, Supplement, User, Exercise } = require('./db/models');

const foodItems = [
  {
    name: 'tomato',
    servingSize: 20,
    servingUnit: 'g',
    calories: 10,
    protein: 0,
    carbs: 8,
    fat: 0
  },
]

const supplements = [
  {
    name: 'milk thistle',
    quantity: 100,
    unitOfMeasure: 'mg'
  },
]

const groceryLists = [
  {
    name: 'bulking grocery list'
  },
  {
    name: 'cutting grocery list'
  },
  {
    name: 'family grocery list'
  }
]

const listItems = [
  {
    quantity: 3,
    foodItemId: 1,
    groceryListId: 1,
  }
]

const macroGoals = [
  {
    name: 'bulking',
    calories: 2500,
    protein: 150,
    carbs: 300,
    fat: 80
  }
]

const microGoals = [
  {
    name: 'heart health',
    vitaminA: 100,
    vitaminB_12: 100,
    vitaminC: 100,
    vitaminD_3: 100,
    vitaminK: 100,
    potassium: 100,
    sodium: 100,
    magnesium: 100,
    zinc: 100
  }
]

const exercises = [
  {
    name: 'running'
  },
  {
    name: 'squats'
  }
]


db
  .sync({ force: true })
  .then(() => {
    return Promise.all(
      foodItems.map(foodItem => {
        return FoodItem.create(foodItem);
      })
    );
  })
  .then(() => {
    return Promise.all(
      supplements.map(supplement => {
        return Supplement.create(supplement);
      })
    );
  })
  .then(() => {
    return Promise.all(
      groceryLists.map(groceryList => {
        return GroceryList.create(groceryList);
      })
    );
  })
  .then(() => {
    return Promise.all(
      listItems.map(listItem => {
        return ListItem.create(listItem);
      })
    );
  })
  .then(() => {
    return Promise.all(
      macroGoals.map(macroGoal => {
        return MacroGoal.create(macroGoal);
      })
    );
  })
  .then(() => {
    return Promise.all(
      microGoals.map(microGoal => {
        return MicroGoal.create(microGoal);
      })
    );
  })
  .then(() => {
    return Promise.all(
      exercises.map(exercise => {
        return Exercise.create(exercise);
      })
    );
  })
  .then(() => {
    console.log('success!!');
  })
  .catch(err => console.error(err));
