import React, { Component } from 'react'
import Progress from 'react-progressbar'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class MacrosProgress extends Component {

  render () {

    const { foodsDayN, macroGoal, dayN } = this.props

    const breakfast = foodsDayN[dayN].breakfast
    const lunch = foodsDayN[dayN].lunch
    const dinner = foodsDayN[dayN].dinner
    const snacks = foodsDayN[dayN].snacks

    let calories=0, protein=0, carbs=0, fat=0

    breakfast.forEach(food => {
      calories += food.calories
      protein += food.protein
      carbs += food.carbs
      fat += food.fat
    })

    lunch.forEach(food => {
      calories += food.calories
      protein += food.protein
      carbs += food.carbs
      fat += food.fat
    })

    dinner.forEach(food => {
      calories += food.calories
      protein += food.protein
      carbs += food.carbs
      fat += food.fat
    })

    snacks.forEach(food => {
      calories += food.calories
      protein += food.protein
      carbs += food.carbs
      fat += food.fat
    })

    const caloriesGoal = macroGoal.calories
    const proteinGoal = macroGoal.protein
    const carbsGoal = macroGoal.carbs
    const fatGoal = macroGoal.fat

    const caloriesProgress = Math.floor((calories / caloriesGoal) * 100)
    const proteinProgress = Math.floor((protein / proteinGoal) * 100)
    const carbsProgress = Math.floor((carbs / carbsGoal) * 100)
    const fatProgress = Math.floor((fat / fatGoal) * 100)

    console.log('protein', protein)
    console.log('proteinGoal', proteinGoal)
    console.log('proteinProgress', proteinProgress)

    return (
      <div>
        <h2>Calories</h2>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <div>Goal: {caloriesGoal}</div>
          <div>Food: {calories}</div>
          <div>Remaining: {caloriesGoal - calories}</div>
        </div>
        <Progress completed={caloriesProgress || 0} color='#A93BF7' />
        <h3>Protein</h3>
        <Progress completed={proteinProgress || 0} color='#00FFD2' />
        <h3>Carbs</h3>
        <Progress completed={carbsProgress || 0} color='#FDF700' />
        <h3>Fat</h3>
        <Progress completed={fatProgress || 0} color='#FF9000' />
      </div>
    )
  }
}

const mapState = (state, ownProps) => {
  const { dayN } = ownProps
  console.log('dayN', dayN)
  console.log('state.foodsDayN', state.foodsDayN)
  return {
    foodsDayN: state.foodsDayN,
    macroGoal: state.macroGoals[0]  // filter by user
  }
}

const mapDispatch = dispatch => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapState, mapDispatch)(MacrosProgress)
