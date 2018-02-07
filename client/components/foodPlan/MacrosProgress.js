import React, { Component } from 'react'
import Progress from 'react-progressbar'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class MacrosProgress extends Component {

  constructor(){
    super()
    // this.state = {
    //   calories: 0,
    //   protein: 0,
    //   carbs: 0,
    //   fat: 0,
    //   caloriesGoal: 2000,
    //   proteinGoal: 200,
    //   carbsGoal: 300,
    //   fatGoal: 80,
    //   caloriesProgress: 0,
    //   proteinProgress: 0,
    //   carbsProgress: 0,
    //   fatProgress: 0
    // }
  }

  // componentWillReceiveProps(nextProps){
  //   console.log('this.props', this.props)
  //   console.log('nextProps', nextProps)
  //   if (this.props.breakfast !== nextProps.foodsDayN){
  //     console.log('recieved different food!')
  //     const { foodsDayN, dayN } = nextProps

  //     const breakfast = foodsDayN[dayN].breakfast
  //     const lunch = foodsDayN[dayN].lunch
  //     const dinner = foodsDayN[dayN].dinner
  //     const snacks = foodsDayN[dayN].snacks

  //     let calories = 0, protein = 0, carbs = 0, fat = 0

  //     breakfast.forEach(food => {
  //       calories += food.calories
  //       protein += food.protein
  //       carbs += food.carbs
  //       fat += food.fat
  //     })

  //     lunch.forEach(food => {
  //       calories += food.calories
  //       protein += food.protein
  //       carbs += food.carbs
  //       fat += food.fat
  //     })

  //     dinner.forEach(food => {
  //       calories += food.calories
  //       protein += food.protein
  //       carbs += food.carbs
  //       fat += food.fat
  //     })

  //     snacks.forEach(food => {
  //       calories += food.calories
  //       protein += food.protein
  //       carbs += food.carbs
  //       fat += food.fat
  //     })

  //     this.setState({
  //       calories,
  //       protein,
  //       carbs,
  //       fat
  //     })
  //   }

  //   if (this.props.macroGoal !== nextProps.macroGoal){
  //     console.log('received macroGoal!')
  //     this.setState({
  //       caloriesGoal: nextProps.macroGoal.calories,
  //       proteinGoal: nextProps.macroGoal.protein,
  //       carbsGoal: nextProps.macroGoal.carbs,
  //       fatGoal: nextProps.macroGoal.fat
  //     })

  //     const { calories, protein, carbs, fat, caloriesGoal, proteinGoal, carbsGoal, fatGoal } = this.state

  //     this.setState({
  //       caloriesProgress: Math.floor((calories / caloriesGoal) * 100),
  //       proteinProgress: Math.floor((protein / proteinGoal) * 100),
  //       carbsProgress: Math.floor((carbs / carbsGoal) * 100),
  //       fatProgress: Math.floor((fat / fatGoal) * 100),
  //     })
  //   } // end second if

  // }


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

    return (showDetails) ? (
      <div>
        <h2>Calories</h2>
        {/* <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <div>Goal: {caloriesGoal}</div>
          <div>Food: {calories}</div>
          <div>Remaining: {caloriesGoal - calories}</div>
        </div> */}
        <Progress completed={calories} color='#A93BF7' />
        <h3>Protein</h3>
        <Progress completed={protein} color='#00FFD2' />
        <h3>Carbs</h3>
        <Progress completed={carbs} color='#FDF700' />
        <h3>Fat</h3>
        <Progress completed={fat} color='#FF9000' />
      </div>
    ) : (
      <div>
        <Progress completed={calories} color='#A93BF7' />
        <Progress completed={protein} color='#00FFD2' />
        <Progress completed={carbs} color='#FDF700' />
        <Progress completed={fat} color='#FF9000' />
      </div>
    )
  }
}

// const mapState = (state, ownProps) => {
//   const { dayN } = ownProps
//   return {
//     foodsDayN: state.foodsDayN,
//     macroGoal: state.macroGoals[0]  // filter by user
//   }
// }

// const mapDispatch = dispatch => {
//   return bindActionCreators({

//   }, dispatch)
// }

// export default connect(mapState, mapDispatch)(MacrosProgress)

export default MacrosProgress
