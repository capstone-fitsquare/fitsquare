const {
  db,
  GroceryList,
  ListItem,
  MacroGoal,
  MicroGoal,
  Supplement,
  User,
  Exercise,
} = require('../server/db/models');

const supplements = [
  {
    name: 'milk thistle',
    quantity: 100,
    unitOfMeasure: 'mg',
  },
  {
    name: 'magnesium',
    quantity: 60,
    unitOfMeasure: 'mg',
  },
  {
    name: 'vegan b12',
    quantity: 60,
    unitOfMeasure: 'mg',
  },
  {
    name: 'blueberry',
    quantity: 60,
    unitOfMeasure: 'mg',
  },
  {
    name: 'cod liver-oil',
    quantity: 8.4,
    unitOfMeasure: 'mg',
  },
  {
    name: 'calcium',
    quantity: 60,
    unitOfMeasure: 'mg',
  },
  {
    name: 'zinc',
    quantity: 60,
    unitOfMeasure: 'mg',
  },
  {
    name: 'calcium',
    quantity: 60,
    unitOfMeasure: 'mg',
  },
  {
    name: 'selenium',
    quantity: 60,
    unitOfMeasure: 'mg',
  },
  {
    name: 'iron',
    quantity: 60,
    unitOfMeasure: 'mg',
  },
  {
    name: 'potassium',
    quantity: 60,
    unitOfMeasure: 'mg',
  },
];

const groceryLists = [
  {
    name: 'bulking grocery list',
  },
  {
    name: 'cutting grocery list',
  },
  {
    name: 'family grocery list',
  },
];

const listItems = [
  {
    quantity: 8,
    foodItemId: 1,
    groceryListId: 3,
  },
  {
    quantity: 1,
    foodItemId: 2,
    groceryListId: 3,
  },
  {
    quantity: 12,
    foodItemId: 5,
    groceryListId: 3,
  },
]

const macroGoals = [
  {
    name: 'Lean Bulking',
    calories: 3000,
    protein: 200,
    carbs: 300,
    fat: 200
  },
  {
    name: 'Hard Bulking',
    calories: 4000,
    protein: 250,
    carbs: 325,
    fat: 225
  },
  {
    name: 'Cutting',
    calories: 2000,
    protein: 200,
    carbs: 200,
    fat: 80
  },
  {
    name: 'Maintenance',
    calories: 2500,
    protein: 200,
    carbs: 250,
    fat: 120
  },
  {
    name: 'Keto',
    calories: 2500,
    protein: 250,
    carbs: 25,
    fat: 250
  },
]

const exercises = [
  {
    name: 'Sprinting',
    // category: Ambulatory,
    // respiratory-type: Aerobic,
    // resistance-type: Bodyweight
  },
  {
    name: 'Jogging',
    // category: Ambulatory,
    // respiratory-type: Aerobic,
    // resistance-type: Bodyweight
  },
  {
    name: 'Running',
    // category: Ambulatory,
    // respiratory-type: Aerobic,
    // resistance-type: Bodyweight
  },
  {
    name: 'Walking',
    // category: Ambulatory,
    // respiratory-type: Aerobic,
    // resistance-type: Bodyweight
  },
  {
    name: 'Barbell Low Bar Squat',
    // category: Strength/Hypertrophy,
    // respiratory-type: Anaerobic,
    // resistance-type: Weighted
  },
  {
    name: 'Deadlift',
    // category: Strength/Hypertrophy,
    // respiratory-type: Anaerobic,
    // resistance-type: Weighted
  },
  {
    name: 'Romanian Deadlift',
    // category: Strength/Hypertrophy,
    // respiratory-type: Anaerobic,
    // resistance-type: Weighted
  },
  {
    name: 'Overhead Press',
    // category: Strength/Hypertrophy,
    // respiratory-type: Anaerobic,
    // resistance-type: Weighted
  },
  {
    name: 'Bench Press'
    // category: Strength/Hypertrophy,
    // respiratory-type: Anaerobic,
    // resistance-type: Weighted
  },
  {
    name: 'Barbell Row',
    // category: Strength/Hypertrophy,
    // respiratory-type: Anaerobic,
    // resistance-type: Weighted
  },
  {
    name: 'Barbell Lunge',
    // category: Strength/Hypertrophy,
    // respiratory-type: Anaerobic,
    // resistance-type: Weighted
  },
  {
    name: 'Barbell Split Squat',
    // category: Strength/Hypertrophy,
    // respiratory-type: Anaerobic,
    // resistance-type: Weighted
  },
  {
    name: 'Weighted Dip',
    // category:  Strength/Hypertrophy,
    // respiratory-type: Anaerobic,
    // resistance-type: Weighted
  },
  {
    name: 'Pullup',
    // category:  Strength/Hypertrophy,
    // respiratory-type: Anaerobic,
    // resistance-type: Bodyweight
  },
  {
    name: 'Chinup',
    // category:  Strength/Hypertrophy,
    // respiratory-type: Anaerobic,
    // resistance-type: Bodyweight
  },
  {
    name: 'Basic Pushup',
    // category:  Strength/Hypertrophy,
    // respiratory-type: Anaerobic,
    // resistance-type: Bodyweight
  },
  {
    name: 'Diamond Pushup',
    // category:  Strength/Hypertrophy,
    // respiratory-type: Anaerobic,
    // resistance-type: Bodyweight
  },
  {
    name: 'L-Sit',
    // category:  Strength/Hypertrophy,
    // respiratory-type: Anaerobic,
    // resistance-type: Bodyweight
  },
  {
    name: 'Ski Squat',
    // category:  Strength/Hypertrophy,
    // respiratory-type: Anaerobic,
    // resistance-type: Bodyweight
  },
  {
    name: 'Bodyweight Dip',
    // category:  Strength/Hypertrophy,
    // respiratory-type: Anaerobic,
    // resistance-type: Bodyweight
  },
  {
    name: 'Squat Jump',
    // category:  Plyometric,
    // respiratory-type: Anaerobic,
    // resistance-type: Bodyweight
  },
  {
    name: 'Split Squat Jump',
    // category:  Plyometric,
    // respiratory-type: Anaerobic,
    // resistance-type: Bodyweight
  },
  {
    name: 'Burpee',
    // category:  Plyometric,
    // respiratory-type: Anaerobic,
    // resistance-type: Bodyweight
  },
  {
    name: 'Depth Jump',
    // category:  Plyometric,
    // respiratory-type: Anaerobic,
    // resistance-type: Bodyweight
  },
  {
    name: 'Drop Jump',
    // category:  Plyometric,
    // respiratory-type: Anaerobic,
    // resistance-type: Bodyweight
  },
  {
    name: 'Slalom Jump',
    // category:  Plyometric,
    // respiratory-type: Anaerobic,
    // resistance-type: Bodyweight
  },
  {
    name: 'Standing Broad Jump',
    // category:  Plyometric,
    // respiratory-type: Anaerobic,
    // resistance-type: Bodyweight
  },
  {
    name: 'Bodyweight Lunge',
    // category:  Plyometric,
    // respiratory-type: Anaerobic,
    // resistance-type: Bodyweight
  },
]

db
  .sync({ force: true })
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
  // .then(() => {
  //   return Promise.all(
  //     macroGoals.map(macroGoal => {
  //       return MacroGoal.create(macroGoal);
  //     })
  //   );
  // })
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
