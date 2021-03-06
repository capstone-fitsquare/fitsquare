import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import ReactDom from 'react-dom'
import {withRouter, Link} from 'react-router-dom'
import Welcome from './01_Welcome'
import Goal from './02_Goal'
import GatherBiometrics from './03_GatherBiometrics'
import ActivityLevel from './04_ActivityLevel'
import AnalyzeBiometrics from './05_AnalyzeBiometrics'
import BiometricsReport from './06_BiometricsReport'
import GatherPreferences from './07_GatherPreferences'
import GenerateFoodPlan from './08_GenerateFoodPlan'
import Popup from 'react-popup'

class IntroSequence extends Component {

  constructor() {
    super()
    this.state = {
      goal: true,
      gatherBiometrics: false,
      activityLevel: false,
      analyzeBiometrics: false,
      biometricsReport: false,
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

    const { welcome, goal, gatherBiometrics, activityLevel, analyzeBiometrics, biometricsReport, gatherPreferences, generateFoodPlan } = this.state

    return (
      <div>
        {goal &&
          <Goal transition={this.transition} />
        }
        {gatherBiometrics &&
          <GatherBiometrics transition={this.transition} />
        }
        {activityLevel &&
          <ActivityLevel transition={this.transition} />
        }
        {analyzeBiometrics &&
          <AnalyzeBiometrics transition={this.transition} />
        }
        {biometricsReport &&
          <BiometricsReport transition={this.transition} />
        }
        {gatherPreferences &&
          <GatherPreferences transition={this.transition} />
        }
        {generateFoodPlan &&
          <GenerateFoodPlan transition={this.transition} />
        }
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
}

const { container, popup } = styles
