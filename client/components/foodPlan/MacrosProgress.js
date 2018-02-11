import React, { Component } from 'react'
import Progress from 'react-progressbar'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class MacrosProgress extends Component {


  render () {

    // console.log('THIS.STATE', this.state)

    const { showDetails, breakfast, lunch, dinner, snacks, macroGoal } = this.props

    let calories = 0, protein = 0, carbs = 0, fat = 0

    breakfast.forEach(recipe => {
      calories += recipe.calories
      protein += recipe.protein
      carbs += recipe.carbs
      fat += recipe.fat
    })

    lunch.forEach(recipe => {
      calories += recipe.calories
      protein += recipe.protein
      carbs += recipe.carbs
      fat += recipe.fat
    })

    dinner.forEach(recipe => {
      calories += recipe.calories
      protein += recipe.protein
      carbs += recipe.carbs
      fat += recipe.fat
    })

    snacks.forEach(recipe => {
      calories += recipe.calories
      protein += recipe.protein
      carbs += recipe.carbs
      fat += recipe.fat
    })


    const caloriesGoal = macroGoal ? macroGoal.calories : 2000
    const proteinGoal = macroGoal ? macroGoal.protein : 200
    const carbsGoal = macroGoal ? macroGoal.carbs : 300
    const fatGoal = macroGoal ? macroGoal.fat : 80

    const caloriesProgress = caloriesGoal ? Math.floor((calories / caloriesGoal) * 100) : 0
    const proteinProgress = proteinGoal ? Math.floor((protein / proteinGoal) * 100) : 0
    const carbsProgress = carbsGoal ? Math.floor((carbs / carbsGoal) * 100) : 0
    const fatProgress = fatGoal ? Math.floor((fat / fatGoal) * 100) : 0

    calories = Math.ceil(calories)
    protein = Math.ceil(protein)
    carbs = Math.ceil(carbs)
    fat = Math.ceil(fat)

    return (showDetails) ? (
      <div>
        {macroGoal ?
        <div id="macro-goal-overview">
          <h3>Calories</h3>
          <Progress completed={caloriesProgress} color='#A93BF7' />
          <div style={{display: 'flex', justifyContent: 'space-around', color: 'lightslategray'}}>
            <div>Goal: {caloriesGoal}</div>
            <div>Food: {calories}</div>
            <div>Remaining: {caloriesGoal - calories}</div>
          </div>
          <h3>Protein</h3>
          <Progress completed={proteinProgress} color='#00FFD2' />
         <div style={{display: 'flex', justifyContent: 'space-around', color: 'lightslategray'}}>
            <div>Goal: {proteinGoal}g</div>
            <div>Food: {protein}g</div>
            <div>Remaining: {proteinGoal - protein}g</div>
          </div>
          <h3>Carbs</h3>
          <Progress completed={carbsProgress} color='#FDF700' />
         <div style={{display: 'flex', justifyContent: 'space-around', color: 'lightslategray'}}>
            <div>Goal: {carbsGoal}g</div>
            <div>Food: {carbs}g</div>
            <div>Remaining: {carbsGoal - carbs}g</div>
          </div>
          <h3>Fat</h3>
          <Progress completed={fatProgress} color='#FF9000' />
         <div style={{display: 'flex', justifyContent: 'space-around', color: 'lightslategray'}}>
            <div>Goal: {fatGoal}g</div>
            <div>Food: {fat}g</div>
            <div>Remaining: {fatGoal - fat}g</div>
          </div>
        </div>
        : null }
        </div>

    ) : (
      <div>
        {macroGoal ?
          <div>
            <Progress completed={caloriesProgress} color='#A93BF7' />
            <Progress completed={proteinProgress} color='#00FFD2' />
            <Progress completed={carbsProgress} color='#FDF700' />
            <Progress completed={fatProgress} color='#FF9000' />
          </div>
        : null}
      </div>
    )
  }
}

export default MacrosProgress
