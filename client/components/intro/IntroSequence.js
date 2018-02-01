import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Welcome from './01_Welcome'
import Goal from './02_Goal'
import GatherBiometrics from './03_GatherBiometrics'
import ActivityLevel from './04_ActivityLevel'
import AnalyzeBiometrics from './05_AnalyzeBiometrics'
import BiometricsReport from './06_BiometricsReport'
import GatherPreferences from './07_GatherPreferences'
import GenerateFoodPlan from './08_GenerateFoodPlan'

class IntroSequence extends Component {

  constructor() {
    super()
    this.state = {
      welcome: true,
      goal: false,
      gatherBiometrics: false,
      activityLevel: false,
      analyzeBiometrics: false,
      biometricReport: false,
      gatherPreferences: false,
      generateFoodPlan: false
    }
    this.transition = this.transition.bind(this)
  }

  transition(currentComponent, nextComponent) {
    this.setState({
      [currentComponent]: false,
      [nextComponent]: true
    })
  }

  render() {

    const { calories, protein, carbs, fat } = this.props.introProfile
    const { welcome, goal, gatherBiometrics, activityLevel, analyzeBiometrics, biometricReport, gatherPreferences, generateFoodPlan } = this.state

    return (
      <div style={container}>
        {welcome &&
          <Welcome transition={this.transition} />
        }
        {goal &&
          <Goal transition={this.transition} />
        }
        <GatherBiometrics />
        <hr style={hr}/>
        <ActivityLevel />
        <hr style={hr}/>
        <AnalyzeBiometrics />
        {calories && protein && carbs && fat &&
          <BiometricsReport calories={calories} protein={protein} carbs={carbs} fat={fat} />
        }
        <hr style={hr}/>
        <GatherPreferences />
        <hr style={hr}/>
        <GenerateFoodPlan />
        <hr style={hr}/>
      </div>
    )
  }
}

const mapState = state => {
  return {
    introProfile: state.introProfile
  }
}

const mapDispatch = null

export default connect(mapState, mapDispatch)(IntroSequence)

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  hr: {
    width: '90%',
  }
}

const { container, hr } = styles
