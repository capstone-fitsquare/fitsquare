const {
  db,
  FoodItem,
  GroceryList,
  ListItem,
  MacroGoal,
  MicroGoal,
  Supplement,
  User,
  Exercise,
} = require('./db/models');

const foodItems = [
  {
    name: 'tomato',
    servingSize: 20,
    servingUnit: 'g',
    calories: 10,
    protein: 0,
    carbs: 8,
    fat: 0,
  },
];

const supplements = [
  {
    name: 'milk thistle',
    quantity: 100,
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
    quantity: 3,
    foodItemId: 1,
    groceryListId: 1,
  },
];

const macroGoals = [
  {
    name: 'bulking',
    calories: 2500,
    protein: 150,
    carbs: 300,
    fat: 80,
  },
];

const microGoals = [
  {
    name: 'ease joint pain',
    avocado_soybean_unsaponifiables: 100,
    chondroitin: 100,
    ginger_extract: 100,
    glucosamine: 100,
    methylsulfonylmethane: 100,
    polyunsaturated_fatty_acids: 100,
  },
  {
    name: 'eye health',
    fish_oil: 100,
    lutein: 100,
    vitaminA: 100,
    vitaminC: 100,
    vitaminE: 100,
    zeaxanthin: 100,
    zinc: 100,
  },
  {
    name: 'hair growth',
    aloe_vera_juice: 100,
    fish_oil: 100,
    iron: 100,
    rosemary_essential_oil: 100,
    vitaminB_1: 100,
    vitaminB_6: 100,
    vitaminB_12: 100,
    vitaminC: 100,
    vitaminD: 100,
    zinc: 100,
  },
  {
    name: 'heart health',
    magnesium: 100,
    potassium: 100,
    sodium: 100,
    vitaminA: 100,
    vitaminB_12: 100,
    vitaminC: 100,
    vitaminD_3: 100,
    vitaminK: 100,
    zinc: 100,
  },
  {
    name: 'increase energy',
    thiamin_vitaminB_1: 100,
    riboflavin_vitaminB_2: 100,
    biotin_vitaminB_7: 100,
    pantothenic_acid: 100,
  },
  {
    name: 'lower blood pressure',
    magnesium: 100,
    vitaminD: 100,
    vitaminE: 100,
  },
  {
    name: 'lower cholesterol',
    coQ10: 100,
    fish_oil: 100,
    garlic: 100,
    niacin: 100,
    red_yeast_rice: 100,
  },
  {
    name: 'reduce brain fog',
    fish_oil: 100,
    vitaminB_1: 100,
    vitaminB_6: 100,
    vitaminB_12: 100,
  },
  {
    name: 'reduce anxiety',
    vitaminB: 100,
    vitaminC: 100,
    vitaminE: 100,
  },
  {
    name: 'weight loss',
    fish_oil: 100,
    glutamine: 100,
    matcha_green_tea: 100,
    vitaminB_12: 100,
    vitaminD: 100,
  },
];

const exercises = [
  {
    name: 'running',
  },
  {
    name: 'squats',
  },
];

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
