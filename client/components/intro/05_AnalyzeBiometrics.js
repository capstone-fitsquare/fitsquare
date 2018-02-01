import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { addCalories, addProtein, addCarbs, addFat } from '../../store'
import iifym from 'iifym.js'

class AnalyzeBiometrics extends Component {

  componentWillMount() {
    console.log('introProfile', this.props.introProfile)

    const { gender, age, heightFeet, heightInches, weight, activityLevel, goalType } = this.props.introProfile

    let goal

    if (goalType === 'Lose fat') goal = 0.8
    else if (goalType === 'Gain muscle') goal = 1.1
    else if (goalType === 'Maintain') goal = 1.0

    console.log('goal', goal)

    const data = {
      gender: gender,
      age: +age,
      isMetric: false,
      ft: +heightFeet,
      in: +heightInches,
      cm: null,
      lbs: +weight,
      kg: null,
      mifflinStJeor: true, // True for lean individuals, false for overweight
      bodyFatPercentage: null, // Required if not using Mifflin-St Jeor90
      exerciseLevel: activityLevel,
      goal: goal,
      protein: 1.0,
      fat: 0.35
    }

    const report = (gender.length && age && heightFeet && heightInches && weight && activityLevel && goalType.length) ? iifym.calculate(data) : null
    console.log('report', report)
    console.log('gender.length', gender.length)
    console.log('age', age)
    console.log('heightFeet', heightFeet)
    console.log('heightInches', heightInches)
    console.log('weight', weight)
    console.log('activityLevel', activityLevel)
    console.log('goalType.length', goalType.length)

    if (report) {
      const { protein, carbs, fat, tdee } = report
      const { addCalories, addProtein, addCarbs, addFat } = this.props
      addCalories(tdee)
      addProtein(protein)
      addCarbs(carbs)
      addFat(fat)
      console.log('got here')
    }
  }

  render() {
    return (
      <div style={container}>
        <div style={header}>
          <p>...Analyzing Biometrics...</p>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    introProfile: state.introProfile
  }
}
const mapDispatch = dispatch => {
  return bindActionCreators({
    addCalories, addProtein, addCarbs, addFat
  }, dispatch)
}

export default connect(mapState, mapDispatch)(AnalyzeBiometrics)

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    margin: '4em 8em',
    display: 'flex',
    justifyContent: 'center'
  },
}

const { container, header } = styles
